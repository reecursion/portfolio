const publications = [{
        year: 2024,
        data: [{
            title: "Cross-cultural Inspiration Detection and Analysis in Real and LLM-generated Social Media Data",
            authors: "Oana Ignat, <u>Gayathri Ganesh Lakshmy</u>, Rada Mihalcea",
            details: "",
            abstract: "Inspiration is linked to various positive outcomes, such as increased creativity, productivity, and happiness. Although inspiration has great potential, there has been limited effort toward identifying content that is inspiring, as opposed to just engaging or positive. Additionally, most research has concentrated on Western data, with little attention paid to other cultures. This work is the first to study cross-cultural inspiration through machine learning methods. We aim to identify and analyze real and AI-generated cross-cultural inspiring posts. To this end, we compile and make publicly available the InspAIred dataset, which consists of 2,000 real inspiring posts, 2,000 real non-inspiring posts, and 2,000 generated inspiring posts evenly distributed across India and the UK. The real posts are sourced from Reddit, while the generated posts are created using the GPT-4 model. Using this dataset, we conduct extensive computational linguistic analyses to (1) compare inspiring content across cultures, (2) compare AI-generated inspiring posts to real inspiring posts, and (3) determine if detection models can accurately distinguish between inspiring content across cultures and data sources.",
            status: "(Submitted to conference)",
            url: "https://arxiv.org/abs/2404.12933",
            is_published: true
        }]
    },
    {
        year: 2023,
        data: [{
            title: "Segmentation and 3D reconstruction of the brain’s Grey matter, White matter and Cerebrospinal Fluid Regions",
            authors: "<u>Gayathri G L</u>, Fathima Naushin A R, Sowmya Ganesan",
            details: "",
            abstract: "Yet to be updated",
            status: "(In Progress)",
            url: "",
            is_published: false
        }, {
            title: "Abusive Comment Detection in Tamil Code-Mixed Data by Adjusting Class Weights and Refining Features",
            authors: "<u>Gayathri G L</u>, Krithika Swaminathan, Divyasri K, Thenmozhi Durairaj, Bharathi B",
            details: "ACM Transactions on Asian and Low-Resource Language Information Processing",
            abstract: "In recent years, a significant portion of the content on various platforms on the internet has been found to be offensive or abusive. Abusive comment detection can go a long way in preventing internet users from facing the adverse effects of coming in contact with abusive language. This problem is particularly challenging when the comments are found in low-resource languages like Tamil or Tamil-English code-mixed text. So far, there has not been any substantial work on abusive comment detection using imbalanced datasets. Furthermore, significant work has not been performed, especially for Tamil code-mixed data, that involves analysing the dataset for classification and accordingly creating a custom vocabulary for preprocessing. This paper proposes a novel approach to classify abusive comments from an imbalanced dataset using a customised training vocabulary and a combination of statistical feature selection with language-agnostic feature selection while making use of explainable AI for feature refinement. Our model achieved an accuracy of 74% and a macro F1-score of 0.46.",
            status: "",
            url: "https://dl.acm.org/doi/abs/10.1145/3664619",
            is_published: true
        }]
    },
    {
        year: 2022,
        data: [{
                title: "PANDAS@Abusive Comment Detection in Tamil Code-Mixed Data Using Custom Embeddings with LaBSE",
                authors: "<u>Gayathri G L</u>, Krithika Swaminathan, Divyasri K, Thenmozhi Durairaj, Bharathi B",
                details: "Proceedings of the Second Workshop on Speech and Language Technologies for Dravidian Languages",
                abstract: "Abusive language has lately been prevalent in comments on various social media platforms. The increasing hostility observed on the internet calls for the creation of a system that can identify and flag such acerbic content, to prevent conflict and mental distress. This task becomes more challenging when low-resource languages like Tamil, as well as the often-observed Tamil-English code-mixed text, are involved. The approach used in this paper for the classification model includes different methods of feature extraction and the use of traditional classifiers. We propose a novel method of combining language-agnostic sentence embeddings with the TF-IDF vector representation that uses a curated corpus of words as vocabulary, to create a custom embedding, which is then passed to an SVM classifier. Our experimentation yielded an accuracy of 52% and a macro F1-score of 0.54.",
                status: "",
                url: "https://aclanthology.org/2022.dravidianlangtech-1.18/",
                is_published: true
            },
            {
                title: "SSNCSE_NLP@LT-EDI-ACL2022: Homophobia/Transphobia Detection in Multiple Languages using SVM Classifiers and BERT-based Transformers",
                authors: "Krithika Swaminathan, Hrishik Sampath, <u>Gayathri G L</u>, Bharathi B",
                details: "Proceedings of the Second Workshop on Language Technology for Equality, Diversity and Inclusion",
                abstract: "Over the years, there has been a slow but steady change in the attitude of society towards different kinds of sexuality. However, on social media platforms, where people have the license to be anonymous, toxic comments targeted at homosexuals, transgenders and the LGBTQ+ community are not uncommon. Detection of homophobic comments on social media can be useful in making the internet a safer place for everyone. For this task, we used a combination of word embeddings and SVM Classifiers as well as some BERT-based transformers. We achieved a weighted F1-score of 0.93 on the English dataset, 0.75 on the Tamil dataset and 0.87 on the Tamil-English Code-Mixed dataset.",
                status: "",
                url: "https://aclanthology.org/2022.ltedi-1.34/",
                is_published: true
            },
            {
                title: "PANDAS@TamilNLP-ACL2022: Emotion Analysis in Tamil Text using Language Agnostic Embeddings",
                authors: "Divyasri K, <u>Gayathri G L</u>, Krithika Swaminathan, Thenmozhi Durairaj, Bharathi B, Senthil Kumar B",
                details: "Proceedings of the Second Workshop on Speech and Language Technologies for Dravidian Languages",
                abstract: "As the world around us continues to become increasingly digital, it has been acknowledged that there is a growing need for emotion analysis of social media content. The task of identifying the emotion in a given text has many practical applications ranging from screening public health to business and management. In this paper, we propose a language agnostic model that focuses on emotion analysis in Tamil text. Our experiments yielded an F1-score of 0.010.",
                status: "",
                url: "https://aclanthology.org/2022.dravidianlangtech-1.17/",
                is_published: true
            }
        ]
    }
];

const publicationContainer = document.getElementById('publicationContainer');

publications.forEach((yearObj) => {
    const year = yearObj.year;
    const data = yearObj.data;

    const yearDiv = document.createElement('span');
    yearDiv.innerHTML = `${year}`;
    publicationContainer.appendChild(yearDiv);

    const headingHr = document.createElement('hr');
    publicationContainer.appendChild(headingHr);

    const headingBr = document.createElement('br');
    publicationContainer.appendChild(headingBr);

    data.forEach((publication, index) => {
        const publicationDiv = document.createElement('div');
        publicationDiv.classList.add('publication');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('pub-title');
        titleDiv.innerHTML = `<b>${publication.title} ${publication.status}</b>`;
        publicationDiv.appendChild(titleDiv);

        const authorsDiv = document.createElement('div');
        authorsDiv.classList.add('pub-authors');
        authorsDiv.innerHTML = publication.authors;
        publicationDiv.appendChild(authorsDiv);

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('pub-details');
        detailsDiv.innerHTML = `<i>${publication.details}</i>`;
        publicationDiv.appendChild(detailsDiv);

        if (publication.is_published) {
            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('pub-buttons');

            const abstractButton = document.createElement('button');
            abstractButton.classList.add('button-view');
            abstractButton.setAttribute('role', 'button');
            abstractButton.innerHTML = 'Abstract';
            abstractButton.addEventListener('click', () => {
                toggleAbstract(index + year);
            });
            buttonsDiv.appendChild(abstractButton);

            const pdfButton = document.createElement('button');
            pdfButton.classList.add('button-view');
            pdfButton.setAttribute('role', 'button');
            pdfButton.innerHTML = 'Paper';

            pdfButton.addEventListener('click', () => {
                window.location.href = publication.url;
            });

            buttonsDiv.appendChild(pdfButton);

            publicationDiv.appendChild(buttonsDiv);

            const abstractDiv = document.createElement('div');
            abstractDiv.classList.add('pub-abstract');
            abstractDiv.id = `abstract${index+year}`;
            abstractDiv.innerHTML = publication.abstract;
            publicationDiv.appendChild(abstractDiv);
        }

        publicationContainer.appendChild(publicationDiv);
    });
});


function toggleAbstract(pubId) {
    const abstract = document.querySelector(`#abstract${pubId}`);
    abstract.classList.toggle('show');
}