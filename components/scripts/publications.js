const publications = [{
        title: "PANDAS@Abusive Comment Detection in Tamil Code-Mixed Data Using Custom Embeddings with LaBSE",
        authors: "<u>Gayathri G L</u>, Krithika Swaminathan, Divyasri K, Thenmozhi Durairaj, Bharathi B",
        details: "Proceedings of the Second Workshop on Speech and Language Technologies for Dravidian Languages",
        abstract: "Abusive language has lately been prevalent in comments on various social media platforms. The increasing hostility observed on the inter- net calls for the creation of a system that can identify and flag such acerbic content, to pre- vent conflict and mental distress. This task be- comes more challenging when low-resource languages like Tamil, as well as the often- observed Tamil-English code-mixed text, are involved. The approach used in this paper for the classification model includes different meth- ods of feature extraction and the use of tradi- tional classifiers. We propose a novel method of combining language-agnostic sentence em- beddings with the TF-IDF vector representation that uses a curated corpus of words as vocab- ulary, to create a custom embedding, which is then passed to an SVM classifier. Our exper- imentation yielded an accuracy of 52% and a macro F1-score of 0.54."
    },
    {
        title: "SSNCSE_NLP@LT-EDI-ACL2022: Homophobia/Transphobia Detection in Multiple Languages using SVM Classifiers and BERT-based Transformers",
        authors: "Krithika Swaminathan, Hrishik Sampath, <u>Gayathri G L</u>, Bharathi B",
        details: "Proceedings of the Second Workshop on Language Technology for Equality, Diversity and Inclusion",
        abstract: "Over the years, there has been a slow but steady change in the attitude of society towards different kinds of sexuality. However, on social media platforms, where people have the license to be anonymous, toxic comments targeted at homosexuals, transgenders and the LGBTQ+ community are not uncommon. Detection of homophobic comments on social media can be useful in making the internet a safer place for everyone. For this task, we used a combination of word embeddings and SVM Classifiers as well as some BERT-based transformers. We achieved a weighted F1-score of 0.93 on the English dataset, 0.75 on the Tamil dataset and 0.87 on the Tamil-English Code-Mixed dataset."
    },
    {
        title: "PANDAS@TamilNLP-ACL2022: Emotion Analysis in Tamil Text using Language Agnostic Embeddings",
        authors: "Divyasri K, <u>Gayathri G L</u>, Krithika Swaminathan, Thenmozhi Durairaj, Bharathi B, Senthil Kumar B",
        details: "Proceedings of the Second Workshop on Speech and Language Technologies for Dravidian Languages",
        abstract: "As the world around us continues to become increasingly digital, it has been acknowledged that there is a growing need for emotion analysis of social media content. The task of identifying the emotion in a given text has many practical applications ranging from screening public health to business and management. In this paper, we propose a language agnostic model that focuses on emotion analysis in Tamil text. Our experiments yielded an F1-score of 0.010."
    },
];

const publicationContainer = document.getElementById('publicationContainer');

publications.forEach((publication, index) => {
    const publicationDiv = document.createElement('div');
    publicationDiv.classList.add('publication');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('pub-title');
    titleDiv.innerHTML = `<b>${publication.title}</b>`;
    publicationDiv.appendChild(titleDiv);

    const authorsDiv = document.createElement('div');
    authorsDiv.classList.add('pub-authors');
    authorsDiv.innerHTML = publication.authors;
    publicationDiv.appendChild(authorsDiv);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('pub-details');
    detailsDiv.innerHTML = `<i>${publication.details}</i>`;
    publicationDiv.appendChild(detailsDiv);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('pub-buttons');

    const abstractButton = document.createElement('button');
    abstractButton.classList.add('button-pub');
    abstractButton.setAttribute('role', 'button');
    abstractButton.innerHTML = 'Abstract';
    abstractButton.addEventListener('click', () => {
        toggleAbstract(index);
    });
    buttonsDiv.appendChild(abstractButton);

    const pdfButton = document.createElement('button');
    pdfButton.classList.add('button-pub');
    pdfButton.setAttribute('role', 'button');
    pdfButton.innerHTML = 'PDF';
    buttonsDiv.appendChild(pdfButton);

    publicationDiv.appendChild(buttonsDiv);

    const abstractDiv = document.createElement('div');
    abstractDiv.classList.add('pub-abstract');
    abstractDiv.id = `abstract${index}`;
    abstractDiv.innerHTML = publication.abstract;
    publicationDiv.appendChild(abstractDiv);

    publicationContainer.appendChild(publicationDiv);
});

function toggleAbstract(pubId) {
    const abstract = document.querySelector(`#abstract${pubId}`);
    abstract.classList.toggle('show');
}