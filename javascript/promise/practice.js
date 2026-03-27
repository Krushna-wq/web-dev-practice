const cardContainer = document.querySelector("#card-container");
const activityLog = document.querySelector("#activity-log");
const runAllBtn = document.querySelector("#run-all-btn");
const clearLogBtn = document.querySelector("#clear-log-btn");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const formatTime = () =>
    new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

const activityEntries = [];

function renderActivity() {
    if (!activityEntries.length) {
        activityLog.innerHTML = '<div class="empty-log">Run any example to see updates here.</div>';
        return;
    }

    activityLog.innerHTML = activityEntries
        .map(
            (entry) => `
                <article class="activity-item">
                    <div class="activity-meta">${entry.time} | ${entry.title}</div>
                    <div>${entry.message}</div>
                </article>
            `
        )
        .join("");
}

function addActivity(title, message) {
    activityEntries.unshift({
        title,
        message,
        time: formatTime()
    });
    renderActivity();
}

function createPromiseCard(example) {
    const card = document.createElement("article");
    card.className = "promise-card";
    card.innerHTML = `
        <div class="card-top">
            <div>
                <h3 class="card-title">${example.title}</h3>
            </div>
            <span class="status-pill status-idle">idle</span>
        </div>
        <p class="card-description">${example.description}</p>
        <div class="result-box">Click run to test this promise.</div>
        <button class="card-btn" type="button">Run Example</button>
    `;

    return {
        card,
        statusPill: card.querySelector(".status-pill"),
        resultBox: card.querySelector(".result-box"),
        button: card.querySelector(".card-btn")
    };
}

function updateStatus(view, status, message) {
    view.statusPill.className = `status-pill status-${status}`;
    view.statusPill.textContent = status;
    view.resultBox.textContent = message;
}

function attachRunner(example, view) {
    view.button.addEventListener("click", async () => {
        view.button.disabled = true;
        updateStatus(view, "pending", example.pendingMessage);
        addActivity(example.title, example.pendingMessage);

        try {
            const result = await example.run();
            updateStatus(view, "resolved", result);
            addActivity(example.title, result);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            updateStatus(view, "rejected", message);
            addActivity(example.title, message);
        } finally {
            view.button.disabled = false;
        }
    });
}

function checkPositiveNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Positive Number Detected: Number is positive");
        } else {
            reject("Negative Number Detected: Number is negative");
        }
    });
}

function checkEvenNum(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Its an even Number");
        } else {
            reject("Its an odd Number");
        }
    });
}

function printValue() {
    return new Promise((resolve, reject) => {
        try {
            resolve(x);
        } catch (error) {
            reject("Error is handled cleanly and the promise is rejected");
        }
    });
}

const examples = [
    {
        title: "Delayed Resolve",
        description: "Based on your first promise. This one waits 2 seconds, then resolves with a value.",
        pendingMessage: "Promise is pending for 2 seconds...",
        run: async () => {
            const promise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Resolved after delay with value: chaicode");
                }, 2000);
            });

            return promise;
        }
    },
    {
        title: "Async Await",
        description: "This reflects your `hPromise` and `nice()` example using `await` to read the final result.",
        pendingMessage: "Waiting for async function to finish...",
        run: async () => {
            const hPromise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Masterji arrived through async/await");
                }, 3000);
            });

            const result = await hPromise;
            return `Async function received: ${result}`;
        }
    },
    {
        title: "Then After Resolve",
        description: "This matches your immediate resolve example, but shows the message after a short UI delay.",
        pendingMessage: "Promise resolved, preparing the final message...",
        run: async () => {
            const myPromise = Promise.resolve("Data received");
            const data = await myPromise;
            await wait(2000);
            return `Data is received by then in 2 seconds: ${data}`;
        }
    },
    {
        title: "Positive Check",
        description: "Uses your `checkPositiveNum` function and shows whether the input is positive or negative.",
        pendingMessage: "Checking whether 4 is positive...",
        run: async () => {
            await wait(1200);
            return checkPositiveNum(4);
        }
    },
    {
        title: "Rejected Promise",
        description: "A quick rejection example based on your `p` promise that immediately fails.",
        pendingMessage: "Creating a promise that will reject...",
        run: async () => {
            await wait(800);
            return Promise.reject("Fail");
        }
    },
    {
        title: "Even Number Check",
        description: "Uses your even or odd logic and reports the result for number 12.",
        pendingMessage: "Checking whether 12 is even...",
        run: async () => {
            await wait(1000);
            return checkEvenNum(12);
        }
    },
    {
        title: "Handled Error",
        description: "This keeps your `printValue` idea and turns the missing variable into a visible handled error.",
        pendingMessage: "Trying to print a missing variable...",
        run: async () => {
            await wait(900);
            return printValue();
        }
    }
];

const views = examples.map((example) => {
    const view = createPromiseCard(example);
    attachRunner(example, view);
    cardContainer.append(view.card);
    return view;
});

runAllBtn.addEventListener("click", async () => {
    runAllBtn.disabled = true;

    for (const view of views) {
        view.button.click();
        await wait(250);
    }

    runAllBtn.disabled = false;
});

clearLogBtn.addEventListener("click", () => {
    activityEntries.length = 0;
    renderActivity();
});

renderActivity();
