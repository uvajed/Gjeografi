// Quiz Questions Database
const quizData = {
    topic1: {
        name: "Rrezatimi Diellor dhe Temperatura e Ajrit",
        questions: [
            {
                question: "Cili është burimi kryesor i energjisë për ngrohjen e Tokës?",
                answers: ["Bërthama e Tokës", "Dielli", "Hëna", "Yjet e tjerë"],
                correct: 1,
                explanation: "Dielli është burimi kryesor i energjisë për Tokën. Rrezatimi diellor ngroh sipërfaqen e Tokës dhe atmosferën."
            },
            {
                question: "Sa është temperatura mesatare globale e Tokës?",
                answers: ["0°C", "15°C", "25°C", "-18°C"],
                correct: 1,
                explanation: "Temperatura mesatare globale e Tokës është rreth 15°C, falë efektit serë të atmosferës."
            },
            {
                question: "Sa gradë bie temperatura për çdo 1000 metra lartësi?",
                answers: ["~3.5°C", "~6.5°C", "~10°C", "~1°C"],
                correct: 1,
                explanation: "Temperatura bie mesatarisht ~6.5°C për çdo 1000 metra rritje të lartësisë mbidetare."
            },
            {
                question: "Çfarë do të ishte temperatura e Tokës pa atmosferë?",
                answers: ["15°C", "0°C", "-18°C", "-50°C"],
                correct: 2,
                explanation: "Pa atmosferë dhe efektin serë, temperatura mesatare e Tokës do të ishte -18°C."
            },
            {
                question: "Çfarë është Albedo?",
                answers: [
                    "Lloji i rrezatimit diellor",
                    "Aftësia e sipërfaqes për të reflektuar rrezet",
                    "Temperatura e ajrit",
                    "Shtypja atmosferike"
                ],
                correct: 1,
                explanation: "Albedo është aftësia e sipërfaqes për të reflektuar rrezet diellore. Borë e bardhë ka albedo të lartë."
            },
            {
                question: "Cilat zona gjeografike janë më të ngrohta?",
                answers: ["Zonat polare", "Zonat tropikale", "Zonat e mesme", "Malet e larta"],
                correct: 1,
                explanation: "Zonat tropikale marrin më shumë rrezatim diellor dhe janë më të ngrohta."
            },
            {
                question: "Si ndikon deti në temperaturën e zonave bregdetare?",
                answers: [
                    "I bën më të ftohta në verë dhe më të ngrohta në dimër",
                    "Nuk ka ndikim",
                    "I bën më të ngrohta gjatë gjithë vitit",
                    "I bën më të ftohta gjatë gjithë vitit"
                ],
                correct: 0,
                explanation: "Deti ka efekt moderues: verë më e freskët dhe dimër më i butë për zonat bregdetare."
            },
            {
                question: "Çfarë është rrezatimi i shpërndarë?",
                answers: [
                    "Rrezet që bien drejtpërdrejt në sipërfaqe",
                    "Rrezet që shpërndahen nga retë dhe atmosfera",
                    "Rrezet që reflektohen nga borë",
                    "Rrezet infra të kuqe"
                ],
                correct: 1,
                explanation: "Rrezatimi i shpërndarë përbëhet nga rrezet që shpërndahen nga retë, pluhuri dhe molekulat e atmosferës."
            },
            {
                question: "Çfarë roli luajnë rrymat detare në klimë?",
                answers: [
                    "Nuk kanë ndikim",
                    "Transportojnë nxehtësi nga ekuatori drejt poleve",
                    "Krijojnë vetëm stuhi",
                    "Ndikojnë vetëm në thellësi të detit"
                ],
                correct: 1,
                explanation: "Rrymat detare transportojnë nxehtësi nga ekuatori drejt poleve, duke ndikuar klimën e kontinenteve."
            },
            {
                question: "Pse temperaturat janë më të ulëta në male të larta?",
                answers: [
                    "Sepse janë më afër Diellit",
                    "Sepse ajri është më i dendur",
                    "Sepse ajri është më i rrallë dhe mban më pak nxehtësi",
                    "Sepse ka më shumë re"
                ],
                correct: 2,
                explanation: "Në lartësi të mëdha, ajri është më i rrallë dhe mban më pak nxehtësi, prandaj temperaturat janë më të ulëta."
            }
        ]
    },
    topic2: {
        name: "Shtypja e Ajrit",
        questions: [
            {
                question: "Me çfarë instrumenti matet shtypja atmosferike?",
                answers: ["Termometër", "Barometër", "Anemometër", "Higrometër"],
                correct: 1,
                explanation: "Barometri është instrumenti që mat shtypjen atmosferike."
            },
            {
                question: "Sa është shtypja normale atmosferike në nivelin e detit?",
                answers: ["1000 mb", "1013.25 mb", "1050 mb", "950 mb"],
                correct: 1,
                explanation: "Shtypja normale atmosferike në nivelin e detit është 1013.25 milibar (mb) ose hektopaskal (hPa)."
            },
            {
                question: "Çfarë ndodh me shtypjen kur ngrihemi në lartësi?",
                answers: [
                    "Rritet",
                    "Mbetet e njëjtë",
                    "Bie",
                    "Luhatet"
                ],
                correct: 2,
                explanation: "Shtypja bie me rritjen e lartësisë, sepse ka më pak ajër sipër."
            },
            {
                question: "Sa milibar bie shtypja për çdo 100 metra lartësi?",
                answers: ["~5 mb", "~12 mb", "~20 mb", "~1 mb"],
                correct: 1,
                explanation: "Shtypja bie mesatarisht ~12 mb për çdo 100 metra rritje të lartësisë."
            },
            {
                question: "Çfarë janë izobaret?",
                answers: [
                    "Vijat që lidhin pikat me temperaturë të njëjtë",
                    "Vijat që lidhin pikat me shtypje të njëjtë",
                    "Vijat që tregojnë drejtimin e erës",
                    "Vijat që tregojnë lartësinë"
                ],
                correct: 1,
                explanation: "Izobaret janë vijat në hartë që lidhin pikat me shtypje atmosferike të njëjtë."
            },
            {
                question: "Çfarë moti sjell zona me shtypje të lartë (anticikloni)?",
                answers: [
                    "Mot me shi dhe re",
                    "Mot i qetë dhe i kthjellët",
                    "Stuhi të forta",
                    "Borë"
                ],
                correct: 1,
                explanation: "Shtypja e lartë (anticikloni) sjell mot të qetë dhe të kthjellët, me pak re dhe reshje."
            },
            {
                question: "Çfarë ndodh me ajrin në zonën me shtypje të ulët?",
                answers: [
                    "Ajri zbret dhe ngrohet",
                    "Ajri ngrihet dhe ftohet",
                    "Ajri qëndron i palëvizshëm",
                    "Ajri lëviz horizontalisht"
                ],
                correct: 1,
                explanation: "Në zonën me shtypje të ulët (ciklon), ajri ngrihet dhe ftohet, duke formuar re dhe reshje."
            },
            {
                question: "Si ndikon temperatura në shtypjen atmosferike?",
                answers: [
                    "Ajri i ngrohtë rrit shtypjen",
                    "Ajri i ngrohtë zgjerohet, ngrihet dhe ul shtypjen",
                    "Temperatura nuk ndikon në shtypje",
                    "Ajri i ftohtë ul shtypjen"
                ],
                correct: 1,
                explanation: "Ajri i ngrohtë zgjerohet, bëhet më i lehtë, ngrihet dhe ul shtypjen atmosferike."
            },
            {
                question: "Çfarë është gradienti barik?",
                answers: [
                    "Ndryshimi i temperaturës",
                    "Ndryshimi i shtypjes në distancë",
                    "Shpejtësia e erës",
                    "Sasia e reshjeve"
                ],
                correct: 1,
                explanation: "Gradienti barik është ndryshimi i shtypjes atmosferike në një distancë të caktuar."
            },
            {
                question: "Në cilin drejtim rrotullohet era në anticiklon në Hemisferën Veriore?",
                answers: [
                    "Kundër akrepave të orës",
                    "Në drejtim të akrepave të orës",
                    "Drejtë nga qendra",
                    "Drejtë drejt qendrës"
                ],
                correct: 1,
                explanation: "Në Hemisferën Veriore, era rrotullohet në drejtim të akrepave të orës në anticiklon."
            }
        ]
    },
    topic3: {
        name: "Erërat",
        questions: [
            {
                question: "Çfarë janë erërat?",
                answers: [
                    "Lëvizje vertikale të ajrit",
                    "Lëvizje horizontale të ajrit",
                    "Ndryshime të temperaturës",
                    "Ndryshime të lagështisë"
                ],
                correct: 1,
                explanation: "Erërat janë lëvizje horizontale të ajrit nga zonat me shtypje të lartë drejt zonave me shtypje të ulët."
            },
            {
                question: "Me çfarë instrumenti matet shpejtësia e erës?",
                answers: ["Barometër", "Termometër", "Anemometër", "Higrometër"],
                correct: 2,
                explanation: "Anemometri është instrumenti që mat shpejtësinë e erës."
            },
            {
                question: "Si emërtohet era?",
                answers: [
                    "Sipas drejtimit ku shkon",
                    "Sipas drejtimit nga vjen",
                    "Sipas shpejtësisë",
                    "Sipas temperaturës"
                ],
                correct: 1,
                explanation: "Era emërtohet sipas drejtimit nga vjen. P.sh., era veriore vjen nga veriu."
            },
            {
                question: "Çfarë janë Alizet?",
                answers: [
                    "Erëra lokale",
                    "Erëra planetare që fryjnë nga 30° drejt ekuatorit",
                    "Erëra polare",
                    "Erëra malore"
                ],
                correct: 1,
                explanation: "Alizet janë erëra planetare që fryjnë nga 30° gjerësi drejt ekuatorit."
            },
            {
                question: "Çfarë është efekti Coriolis?",
                answers: [
                    "Ngrohja e ajrit",
                    "Ftohja e ajrit",
                    "Devijimi i erërave për shkak të rrotullimit të Tokës",
                    "Formimi i reve"
                ],
                correct: 2,
                explanation: "Efekti Coriolis është devijimi i erërave për shkak të rrotullimit të Tokës rreth boshtit të saj."
            },
            {
                question: "Në cilin drejtim devijojnë erërat në Hemisferën Veriore?",
                answers: ["Në të majtë", "Në të djathtë", "Nuk devijojnë", "Drejt ekuatorit"],
                correct: 1,
                explanation: "Në Hemisferën Veriore, erërat devijojnë në të djathtë për shkak të efektit Coriolis."
            },
            {
                question: "Çfarë është Föhn-i?",
                answers: [
                    "Erë e lagësht nga deti",
                    "Erë e ngrohtë dhe e thatë që zbret nga malet",
                    "Erë polare",
                    "Erë tropikale"
                ],
                correct: 1,
                explanation: "Föhn-i është erë e ngrohtë dhe e thatë që zbret nga malet, duke u ngrohur gjatë zbritjes."
            },
            {
                question: "Çfarë është flladi (briza)?",
                answers: [
                    "Erë e fortë stuhie",
                    "Erë ditë-natë pranë brigjeve",
                    "Erë malore",
                    "Erë planetare"
                ],
                correct: 1,
                explanation: "Flladi (briza) është erë lokale ditë-natë që ndodh pranë brigjeve të detit."
            },
            {
                question: "Çfarë do të thotë kur izobaret janë të dendura në hartë?",
                answers: [
                    "Erë e dobët",
                    "Erë e fortë",
                    "Mot i kthjellët",
                    "Reshje të shumta"
                ],
                correct: 1,
                explanation: "Kur izobaret janë të dendura, gradienti barik është i madh, që do të thotë erë e fortë."
            },
            {
                question: "Çfarë është ITCZ?",
                answers: [
                    "Zona e shtypjes së lartë",
                    "Zona e Konvergjencës Ndërtropikale",
                    "Zona polare",
                    "Zona malore"
                ],
                correct: 1,
                explanation: "ITCZ (Intertropical Convergence Zone) është Zona e Konvergjencës Ndërtropikale ku takohen alizet."
            }
        ]
    }
};

// Quiz State
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let answered = false;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Topic Navigation (Explanations)
    const topicButtons = document.querySelectorAll('.topic-btn');
    const topicContents = document.querySelectorAll('.topic-content');

    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            const topicId = button.dataset.topic;

            topicButtons.forEach(btn => btn.classList.remove('active'));
            topicContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(topicId).classList.add('active');
        });
    });

    // Quiz Topic Selection
    const quizTopicCards = document.querySelectorAll('.quiz-topic-card');
    quizTopicCards.forEach(card => {
        card.addEventListener('click', () => {
            startQuiz(card.dataset.quiz);
        });
    });

    // Next Button
    document.getElementById('next-btn').addEventListener('click', nextQuestion);

    // Results Buttons
    document.getElementById('retry-btn').addEventListener('click', retryQuiz);
    document.getElementById('back-btn').addEventListener('click', backToTopics);
});

// Start Quiz
function startQuiz(topicKey) {
    currentQuiz = topicKey;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    // Get questions
    if (topicKey === 'all') {
        questions = [
            ...shuffleArray([...quizData.topic1.questions]),
            ...shuffleArray([...quizData.topic2.questions]),
            ...shuffleArray([...quizData.topic3.questions])
        ];
        questions = shuffleArray(questions);
    } else {
        questions = shuffleArray([...quizData[topicKey].questions]);
    }

    // Update UI
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('score').textContent = '0';

    // Show quiz questions section
    showSection('quiz-questions');
    showQuestion();
}

// Show Question
function showQuestion() {
    answered = false;
    const question = questions[currentQuestionIndex];

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;

    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    // Create answer buttons
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });

    // Hide feedback and next button
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('next-btn').style.display = 'none';
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    const feedback = document.getElementById('feedback');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === question.correct) {
        // Correct answer
        score++;
        document.getElementById('score').textContent = score;
        buttons[selectedIndex].classList.add('correct');
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>✅ Saktë!</strong><br>${question.explanation}`;
    } else {
        // Wrong answer
        buttons[selectedIndex].classList.add('incorrect');
        buttons[question.correct].classList.add('show-correct');
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `<strong>❌ Gabim!</strong><br>Përgjigja e saktë: ${question.answers[question.correct]}<br><br>${question.explanation}`;
    }

    // Show next button
    const nextBtn = document.getElementById('next-btn');
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.textContent = 'Pyetja Tjetër →';
    } else {
        nextBtn.textContent = 'Shiko Rezultatet →';
    }
    nextBtn.style.display = 'block';
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    const percentage = Math.round((score / questions.length) * 100);

    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = questions.length;
    document.getElementById('percentage-text').textContent = percentage + '%';

    // Animate percentage bar
    setTimeout(() => {
        document.getElementById('percentage-fill').style.width = percentage + '%';
    }, 100);

    // Set message and icon based on score
    let message, icon;
    if (percentage >= 90) {
        message = 'Shkëlqyeshëm! Je ekspert i gjeografisë! 🌟';
        icon = '🏆';
    } else if (percentage >= 70) {
        message = 'Shumë mirë! Ke njohuri të forta! 💪';
        icon = '🥇';
    } else if (percentage >= 50) {
        message = 'Mirë! Vazhdo të mësosh më shumë! 📚';
        icon = '🥈';
    } else if (percentage >= 30) {
        message = 'Duhet të studiosh pak më shumë. Mos u dorëzo! 💡';
        icon = '🥉';
    } else {
        message = 'Lexo shpjegimet dhe provo përsëri! 📖';
        icon = '📝';
    }

    document.getElementById('results-message').textContent = message;
    document.getElementById('results-icon').textContent = icon;

    showSection('quiz-results');
}

// Retry Quiz
function retryQuiz() {
    startQuiz(currentQuiz);
}

// Back to Topics
function backToTopics() {
    showSection('quiz-start');
    document.getElementById('percentage-fill').style.width = '0%';
}

// Show Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.quiz-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Shuffle Array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
