const RESULTS_KEY = "freetimezp:roadmap:skill-check-results:v1";
const TEST_ID = "007";
const TEST_TITLE = "Underline Animation & Animated Pseudo-elements";

const questionBank = [
    {
        type: "single",
        topic: "PSEUDO-ELEMENTS",
        q: "Which pseudo-element is commonly used to create a decorative underline without adding extra HTML?",
        code: "a {\n  position: relative;\n}\n\na::after {\n  /* decorative line */\n}",
        options: [
            "::before or ::after",
            ":hover only",
            "::selection",
            ":focus-visible",
        ],
        correct: ["a"],
        explanation:
            "::before and ::after generate a virtual child that can be styled as a line. They are ideal for decorative effects.",
    },
    {
        type: "single",
        topic: "POSITIONING",
        q: "Why is position: relative often added to the link when its underline is absolutely positioned?",
        code: "a { position: relative; }\na::after {\n  position: absolute;\n  left: 0;\n  bottom: -4px;\n}",
        options: [
            "It creates a positioning context for the pseudo-element",
            "It makes the link a block element",
            "It enables transition",
            "It prevents the link from being clickable",
        ],
        correct: ["a"],
        explanation:
            "The relatively positioned link becomes the containing block for its absolutely positioned pseudo-element.",
    },
    {
        type: "single",
        topic: "TRANSFORM",
        q: "Which transform can make an underline reveal from left to right while keeping its left edge anchored?",
        code: ".link::after {\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.link:hover::after {\n  transform: scaleX(1);\n}",
        options: ["scaleX()", "rotateY()", "translateY()", "skewY()"],
        correct: ["a"],
        explanation:
            "scaleX(0) collapses the line horizontally. scaleX(1) restores its full width.",
    },
    {
        type: "single",
        topic: "TRANSFORM ORIGIN",
        q: "What does transform-origin: right change in a scaleX underline animation?",
        options: [
            "The right edge stays anchored while the line scales",
            "The line moves to the right by its own width",
            "The line becomes twice as thick",
            "The line changes its color",
        ],
        correct: ["a"],
        explanation:
            "transform-origin defines the point around which a transform happens. Setting it to right anchors the right edge.",
    },
    {
        type: "multiple",
        topic: "TRANSITIONS",
        q: "Which properties are suitable for a smooth underline reveal? Choose all that apply.",
        code: ".link::after {\n  transition: transform .3s ease;\n}",
        options: ["transform", "opacity", "box-shadow", "href"],
        correct: ["a", "b", "c"],
        explanation:
            "transform, opacity and box-shadow are animatable CSS properties. href is an HTML attribute, not a CSS property.",
    },
    {
        type: "single",
        topic: "HOVER STATE",
        q: "Which selector targets the pseudo-element only while its parent link is hovered?",
        code: "a:hover::after {\n  transform: scaleX(1);\n}",
        options: [
            "a::after:hover",
            "a:hover::after",
            "a:after:hovered",
            "a::hover",
        ],
        correct: ["b"],
        explanation:
            "The state belongs to the anchor, so write a:hover::after to style its generated after pseudo-element in that state.",
    },
    {
        type: "single",
        topic: "ANIMATION",
        q: "What is the main purpose of transition in a hover underline effect?",
        options: [
            "It interpolates property changes over time",
            "It creates the pseudo-element",
            "It adds semantic meaning to the link",
            "It makes the link open in a new tab",
        ],
        correct: ["a"],
        explanation:
            "A transition animates changes between property values when the state changes, such as scaleX(0) to scaleX(1).",
    },
    {
        type: "multiple",
        topic: "ACCESSIBILITY",
        q: "Which practices help make animated navigation links accessible? Choose all that apply.",
        options: [
            "Keep a visible :focus-visible style",
            "Ensure links have meaningful text",
            "Use color alone to communicate every state",
            "Respect prefers-reduced-motion",
        ],
        correct: ["a", "b", "d"],
        explanation:
            "Keyboard focus, meaningful link text and reduced-motion support improve accessibility. Do not rely on color alone.",
    },
    {
        type: "single",
        topic: "PSEUDO-ELEMENT CONTENT",
        q: "What value is normally required for a generated ::after element to render?",
        code: 'a::after {\n  content: "";\n}',
        options: ["content", "display", "animation-name", "z-index"],
        correct: ["a"],
        explanation:
            "The content property is required for ::before and ::after to generate their box. An empty string is common for decorative shapes.",
    },
    {
        type: "single",
        topic: "WIDTH",
        q: "If an underline should match the full width of its link, which width is a common choice?",
        code: "a::after {\n  width: 100%;\n}",
        options: ["100%", "100vw", "fit-content: 0", "auto-fill"],
        correct: ["a"],
        explanation:
            "With the pseudo-element positioned relative to the link, width: 100% spans the link's containing block.",
    },
    {
        type: "single",
        topic: "PLACEMENT",
        q: "Which declaration places an absolutely positioned underline just below the link box?",
        code: "a::after {\n  position: absolute;\n  bottom: -5px;\n}",
        options: [
            "bottom: -5px",
            "padding-bottom: -5px",
            "margin-top: -5px",
            "vertical-align: -5px",
        ],
        correct: ["a"],
        explanation:
            "bottom offsets the absolutely positioned pseudo-element from the containing block's bottom edge.",
    },
    {
        type: "multiple",
        topic: "ANIMATION STATES",
        q: "Which interaction states might you style for an animated link? Choose all that apply.",
        options: [":hover", ":focus-visible", ":active", "::visited:hovered"],
        correct: ["a", "b", "c"],
        explanation:
            ":hover, :focus-visible and :active are valid interaction pseudo-classes. :visited:hovered is not a valid selector.",
    },
    {
        type: "single",
        topic: "KEYFRAMES",
        q: "When would @keyframes be more useful than a simple transition?",
        options: [
            "When an animation needs multiple stages or automatic looping",
            "For every hover state, no matter how simple",
            "To make an element focusable",
            "To create an HTML link",
        ],
        correct: ["a"],
        explanation:
            "Keyframes define multiple points in an animation and can run automatically, repeat or loop. A transition is often simpler for a two-state hover effect.",
    },
    {
        type: "single",
        topic: "STACKING",
        q: "What can z-index help control for a pseudo-element underline?",
        code: "a { position: relative; }\na::after {\n  position: absolute;\n  z-index: -1;\n}",
        options: [
            "Its stacking order relative to other elements",
            "Its animation duration",
            "Its text content",
            "Its intrinsic width",
        ],
        correct: ["a"],
        explanation:
            "z-index controls stacking order for positioned elements and elements in relevant stacking contexts. Use it carefully so the line does not disappear behind a parent.",
    },
    {
        type: "single",
        topic: "HOVER REVEAL",
        q: "Which initial state hides a line horizontally before hover?",
        code: ".nav-link::after {\n  transform: scaleX(0);\n}",
        options: [
            "scaleX(0)",
            "opacity: 100",
            "width: 100vw",
            "rotate: 360deg",
        ],
        correct: ["a"],
        explanation:
            "scaleX(0) collapses the underline along the X axis. A transition can then reveal it on hover or focus.",
    },
    {
        type: "multiple",
        topic: "CSS STRUCTURE",
        q: "Which declarations are commonly part of a robust pseudo-element underline setup? Choose all that apply.",
        code: '.nav-link { position: relative; }\n.nav-link::after {\n  content: "";\n  position: absolute;\n  left: 0;\n}',
        options: [
            "position: relative on the link",
            'content: "" on the pseudo-element',
            "position: absolute on the pseudo-element",
            'target="_blank" on the pseudo-element',
        ],
        correct: ["a", "b", "c"],
        explanation:
            "The link provides the positioning context; the pseudo-element is generated and absolutely positioned. target is an anchor attribute, not a pseudo-element setting.",
    },
    {
        type: "single",
        topic: "REDUCED MOTION",
        q: "Which media query detects a user's preference for less motion?",
        code: "@media (prefers-reduced-motion: reduce) {\n  /* simplify motion */\n}",
        options: [
            "prefers-reduced-motion: reduce",
            "motion: none",
            "animation: disabled",
            "reduced-motion: true",
        ],
        correct: ["a"],
        explanation:
            "The prefers-reduced-motion media feature lets you adapt or remove non-essential motion for users who request it.",
    },
    {
        type: "single",
        topic: "TRANSFORM VS WIDTH",
        q: "Why is transform: scaleX() often preferred over animating width for a simple underline reveal?",
        options: [
            "It can animate without repeatedly changing layout dimensions",
            "It automatically changes the link destination",
            "It is the only property that can be transitioned",
            "It removes the need for a pseudo-element",
        ],
        correct: ["a"],
        explanation:
            "Transforms generally avoid layout recalculation and are often smoother for this visual effect than repeatedly animating width.",
    },
    {
        type: "single",
        topic: "FOCUS",
        q: "How can the same underline appear for keyboard users as for mouse users?",
        code: ".nav-link:hover::after,\n.nav-link:focus-visible::after {\n  transform: scaleX(1);\n}",
        options: [
            "Include :focus-visible in the reveal selector",
            "Disable keyboard focus",
            "Use only :hover",
            'Add tabindex="-1" to every link',
        ],
        correct: ["a"],
        explanation:
            "Pairing :focus-visible with :hover gives keyboard users the same visual feedback without requiring a mouse.",
    },
    {
        type: "multiple",
        topic: "DEBUGGING",
        q: "An ::after underline is not visible. Which items should you check? Choose all that apply.",
        options: [
            "Is content defined?",
            "Does the pseudo-element have dimensions?",
            "Is it positioned outside the visible area?",
            "Does the anchor have a valid alt attribute?",
        ],
        correct: ["a", "b", "c"],
        explanation:
            "Check content, width/height, positioning, color, stacking and overflow. alt is used for image alternatives, not anchors.",
    },
];

const $ = (id) => document.getElementById(id);

const ui = {
    intro: $("intro"),
    quiz: $("quizPanel"),
    results: $("resultsPanel"),
    start: $("startButton"),
    check: $("checkButton"),
    next: $("nextButton"),
    restart: $("restartButton"),
    current: $("currentNumber"),
    total: $("totalNumber"),
    progress: $("progressBar"),
    type: $("questionType"),
    topic: $("questionTopic"),
    question: $("questionText"),
    hint: $("questionHint"),
    codeCard: $("codeCard"),
    code: $("codeText"),
    options: $("options"),
    feedback: $("feedback"),
    note: $("selectNote"),
    answered: $("answeredCount"),
    ring: $("ring"),
    ringValue: $("ringValue"),
    resultTitle: $("resultTitle"),
    resultMessage: $("resultMessage"),
    score: $("scoreNumber"),
    correct: $("correctStat"),
    attempts: $("attemptStat"),
    best: $("bestStat"),
    saveNote: $("saveNote"),
};

let questions = [];
let index = 0;
let selected = [];
let locked = false;
let score = 0;
let previousRecord = null;

function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startQuiz() {
    questions = shuffle(questionBank).map((question) => ({
        ...question,
        options: shuffle(
            question.options.map((label, i) => ({
                id: String.fromCharCode(97 + i),
                label,
            })),
        ),
    }));

    index = 0;
    score = 0;
    selected = [];
    locked = false;

    ui.intro.classList.add("hidden");
    ui.results.classList.add("hidden");
    ui.quiz.classList.remove("hidden");

    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
    const q = questions[index];
    selected = [];
    locked = false;

    ui.current.textContent = String(index + 1).padStart(2, "0");
    ui.total.textContent = String(questions.length).padStart(2, "0");
    ui.type.textContent =
        q.type === "multiple" ? "MULTIPLE CHOICE" : "SINGLE CHOICE";
    ui.topic.textContent = q.topic;
    ui.question.textContent = q.q;
    ui.hint.textContent =
        q.type === "multiple"
            ? "Select every correct answer."
            : "Select the one best answer.";
    ui.codeCard.classList.toggle("hidden", !q.code);
    ui.code.textContent = q.code || "";
    ui.options.innerHTML = "";
    ui.feedback.className = "feedback hidden";
    ui.feedback.textContent = "";
    ui.check.classList.remove("hidden");
    ui.next.classList.add("hidden");
    ui.check.disabled = true;
    ui.note.textContent =
        q.type === "multiple"
            ? "Select all answers that apply."
            : "Choose one answer to continue.";

    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        label.className = "option";
        label.innerHTML = `<input type="${q.type === "multiple" ? "checkbox" : "radio"}" name="answer" value="${option.id}"><span class="option-text"><span class="option-letter">${String.fromCharCode(65 + i)} /</span> ${escapeHTML(option.label)}</span>`;
        const input = label.querySelector("input");
        input.addEventListener("change", () => {
            if (locked) return;
            if (q.type === "single") selected = [option.id];
            else
                selected = input.checked
                    ? [...selected, option.id]
                    : selected.filter((id) => id !== option.id);
            ui.options
                .querySelectorAll(".option")
                .forEach((el) => el.classList.remove("selected"));
            ui.options.querySelectorAll("input").forEach((el) => {
                if (el.checked) el.closest(".option").classList.add("selected");
            });
            ui.check.disabled = selected.length === 0;
        });
        ui.options.appendChild(label);
    });
    updateProgress();
}

function escapeHTML(value) {
    return value.replace(
        /[&<>"']/g,
        (char) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;",
            })[char],
    );
}

function updateProgress() {
    const answered = index + (locked ? 1 : 0);
    const percent = Math.round((answered / questions.length) * 100);

    ui.progress.style.width = `${percent}%`;
    ui.answered.textContent = `${answered} / ${questions.length}`;
    ui.ringValue.textContent = `${percent}%`;
    ui.ring.style.background = `conic-gradient(var(--cyan) ${percent * 3.6}deg, #233c4b 0deg)`;
}

function checkAnswer() {
    if (locked || selected.length === 0) return;
    locked = true;

    const q = questions[index];
    const expected = [...q.correct].sort();
    const actual = [...selected].sort();
    const isCorrect =
        expected.length === actual.length &&
        expected.every((id, i) => id === actual[i]);

    if (isCorrect) score++;

    ui.options.querySelectorAll(".option").forEach((label) => {
        const input = label.querySelector("input");
        input.disabled = true;
        if (q.correct.includes(input.value)) label.classList.add("correct");
        else if (input.checked) label.classList.add("incorrect");
    });

    ui.feedback.classList.remove("hidden");
    ui.feedback.classList.toggle("wrong", !isCorrect);
    ui.feedback.innerHTML = `<strong>${isCorrect ? "Correct." : "Not quite."}</strong> ${escapeHTML(q.explanation)}`;
    ui.check.classList.add("hidden");
    ui.next.classList.remove("hidden");
    ui.next.innerHTML =
        index === questions.length - 1
            ? "See results <span>↗</span>"
            : "Next question <span>→</span>";
    ui.note.textContent = isCorrect
        ? "Good eye. Keep going."
        : "Review the explanation before moving on.";
    updateProgress();
}

function nextQuestion() {
    if (!locked) return;
    if (index < questions.length - 1) {
        index++;
        renderQuestion();
    } else {
        showResults();
    }
}

function readResults() {
    try {
        const data = JSON.parse(localStorage.getItem(RESULTS_KEY) || "{}");
        return data && typeof data === "object" ? data : {};
    } catch {
        return {};
    }
}

function saveResult(percentage) {
    try {
        const data = readResults();
        const tests =
            data.tests && typeof data.tests === "object" ? data.tests : {};

        const previous = tests[TEST_ID] || {};
        const completedAt = new Date().toISOString();
        const attempt = {
            score,
            total: questions.length,
            percentage,
            completedAt,
        };

        const oldBest = previous.best;
        const best =
            !oldBest || percentage >= oldBest.percentage ? attempt : oldBest;
        const history = Array.isArray(previous.history) ? previous.history : [];

        tests[TEST_ID] = {
            testId: TEST_ID,
            title: TEST_TITLE,
            attempts: (Number(previous.attempts) || 0) + 1,
            latest: attempt,
            best,
            history: [...history, attempt].slice(-10),
        };

        localStorage.setItem(
            RESULTS_KEY,
            JSON.stringify({
                schemaVersion: 1,
                updatedAt: completedAt,
                tests,
            }),
        );
        return tests[TEST_ID];
    } catch (error) {
        console.warn("Could not save skill-check result:", error);
        return null;
    }
}

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
    previousRecord = saveResult(percentage);
    ui.quiz.classList.add("hidden");
    ui.results.classList.remove("hidden");
    ui.resultTitle.innerHTML =
        percentage >= 80
            ? "Excellent work<span>.</span>"
            : percentage >= 60
              ? "Good progress<span>.</span>"
              : "Keep building<span>.</span>";

    ui.resultMessage.textContent =
        percentage >= 80
            ? "You have a strong grasp of animated underlines and CSS pseudo-elements. Keep experimenting with timing and interaction states."
            : percentage >= 60
              ? "You understand many of the fundamentals. Review the explanations and try again to strengthen the details."
              : "Every attempt is useful practice. Revisit pseudo-elements, positioning and transform states, then give it another go.";
    ui.score.textContent = `${percentage}%`;
    ui.correct.textContent = `${score} / ${questions.length}`;
    ui.attempts.textContent = previousRecord ? previousRecord.attempts : "—";
    ui.best.textContent = previousRecord
        ? `${previousRecord.best.percentage}%`
        : `${percentage}%`;
    ui.saveNote.textContent = previousRecord
        ? "Result saved in this browser. The roadmap can read this score from the shared localStorage key."
        : "The result could not be saved. Check whether browser storage is available.";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

ui.start.addEventListener("click", startQuiz);
ui.check.addEventListener("click", checkAnswer);
ui.next.addEventListener("click", nextQuestion);
ui.restart.addEventListener("click", startQuiz);
