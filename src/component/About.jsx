const text = `Passionné d’informatique, des nouvelles technologies et de la transformation numérique.
J’aime travailler sur la conception des logiciels de toute taille, car la rigueur et la discipline que ça implique sont des valeurs que j’incarne au quotidien. 
Actuellement employé chez CANAL+ au poste de développeur logiciel, ma mission consiste à concevoir des outils logiciels à usage internes.
Père d’une petite fille au nom de Kinya qui m’attend chaque soir quand je rentre du travail, j’aime passer du temps avec ma famille le week-end.
Au travail comme à la maison j’aime écouter de la Rumba, un style de musique originaire de Cuba qui mélange rythmes et mélodies cubaines avec des sonorités africaines.`

const About = () => {
    return ( 
        <section id="about">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-about-area">

							<div class="mu-about-header">
								<h2 class="mu-heading-title">QUI JE SUIS ?</h2>
								<span class="mu-header-dot"></span>
								<p id="about-me-text">{text}
								</p>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
     );
}
 
export default About;