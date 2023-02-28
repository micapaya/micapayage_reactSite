import React from 'react';
import ActusBloc from '../components/ActusBloc';
import Header from '../components/Header';
import SectionFwHome from '../components/SectionFwHome';

const Home = () => {
    const resume = "Passioné par l'image et la technique, je n'ai eu de cesse de travailler pour produire des images et identités fortes. L'expérimentation de nouvelles techniques de prise de vue ou de génération de design professionnel, sont chez moi des passions fortes. La video, la création de motion design pour le web, l'animation des pages web pour renforcer l'éxpérience des utilisateurs, la création de contenus photographiques ou encore l'établissement de design pour améliorer le sentiment client sont, à mon sens, complémentaire et ne peuvent être dissocié. De cette manière, je maîtrise l'intégralité de la chaine de production graphique et me permet de fournir une cohérence graphique prononcée. Bien entendu, je suis toujours partant pour intégrer une équipe pluridisciplinaire et peut intégrer certaines de ces compétences pour servir un projet commun. En parfait autodiddacte, je m'adapte rapidement afin de répondre à des commandes en parfaite adéquaction avec votre projet.";
    const title = "à propos";

    return (
        <div>
            <Header/>
            <SectionFwHome desc={resume} title={title} />
            <ActusBloc 
            titleActus="en ce moment je ne fait rien de bien"
            actuContent="
Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cupiditate. Maiores, reiciendis odio. Doloribus, iure. Saepe delectus, corporis harum quisquam magni porro eveniet, laudantium accusantium provident libero voluptate placeat optio non, itaque quibusdam alias unde corrupti totam rem? Adipisci illum dolorem, totam accusantium natus quaerat in neque iusto! Molestias, velit! Vitae perspiciatis distinctio soluta expedita, mollitia dignissimos eaque rerum esse eum! Iusto quasi, officia eligendi ut earum quibusdam hic error laborum maiores veritatis sunt molestias quis ea delectus soluta illo sed unde mollitia consequatur tenetur reprehenderit incidunt cupiditate voluptatibus quidem. Officiis, perferendis sit. Cum numquam quidem delectus nam consequatur officiis!"
            srcImageActus="./assets/img/machine-avatar.jpg"
            urlOfactus="#"
            />
            

            

            
        </div>
    );
};

export default Home;

