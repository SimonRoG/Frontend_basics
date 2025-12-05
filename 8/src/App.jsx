import React from 'react'
import './App.css'

function App() {
	return (
		<>
			<header>
				<div id="logo">
					<h3>PetShelter</h3>
				</div>
				<nav>
					<ul>
						<li><a href="#start">Home</a></li>
						<li><a href="#gallery">Gallery</a></li>
						<li><a href="#network">Network</a></li>
						<li><a href="#guardians">Guardians</a></li>
						<li><a href="#footer">Contact</a></li>
					</ul>
				</nav>
			</header>
			<main>
				<div id="start">
					<h1>ADOPT US. <br /> WE NEED YOUR HELP.</h1>
					<p>
						Reprehenderit itaque velit sed perferendis quis sunt. <br />
						Et odit est doloribus voluptatem dolor ut corrupti rem libero.
					</p>
					<button>Find a pet to adopt</button>
				</div>
				<div id="gallery">
					{/* x4 */}
					<img src="https://placehold.co/200x200?text=cat" alt="cat" />
					<img src="https://placehold.co/200x200?text=dog" alt="dog" />
					<img src="https://placehold.co/200x200?text=cat" alt="cat" />
					<img src="https://placehold.co/200x200?text=dog" alt="dog" />
				</div>
				<div id="favpet">
					<h3>Please select your favourite pet</h3>
					<button>Fill Adoption Form</button>
				</div>
				<div id="network">
					<img src="https://placehold.co/500x300" alt="" />
					<div>
						<h3>Globally Connected by Large Network</h3>
						<p>
							We are here to listen from you deliver excellence
						</p>
						<p>
							Excepturi in ut occaecati molestias similique quis voluptas et quaerat. Rerum veniam qui est sunt necessitatibus consequuntur impedit. Consequatur voluptate qui et ea odit quibusdam et molestias non. Assumenda aperiam voluptatem voluptas occaecati. Nisi sint rem iste dolorem ea facere amet. Voluptas laboriosam et deleniti deserunt ea sit consectetur dolores dolores.
						</p>
						<button>Get Details</button>
					</div>
				</div>
				<div id="video">
					<video src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
					<h4>Watch this video how they live here</h4>
					<p>
						Molestias natus nihil consequatur. Voluptatem omnis similique dicta omnis quo beatae amet. Fuga est sunt sed.
					</p>
				</div>
				<div id="adopt">
					<h3>Process to adopt a pet</h3>
					<p>
						Who are in extremely love with eco friendly system
					</p>
					{/* x4 */}
					<div id="steps">
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<h4>Pet Selection</h4>
							<p>
								Quo esse maxime facilis ut aspernatur dolores minima aut. Dolores consequatur illo. Fugit explicabo quibusdam et delectus sunt. Velit ut dolorum architecto iure non sit quas earum. Est laudantium quisquam veniam ut recusandae. Praesentium dolores sit quia qui impedit.
							</p>
						</div>
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<h4>Meeting Authority</h4>
							<p>
								Dolores iusto harum laborum temporibus neque. Repudiandae voluptas sed. Maxime porro asperiores soluta. Deserunt accusamus vel dolores quas molestiae magni et totam.
							</p>
						</div>
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<h4>Adoption Form Filling</h4>
							<p>
								Vel sequi aliquam ut. Eligendi et dolorem reiciendis id accusamus voluptatum illo. Fugiat dicta ipsum et. Ratione expedita aliquam omnis. Aut non magni omnis omnis cum veniam eligendi sapiente ut. Molestias iure nihil quo unde voluptas ut.
							</p>
						</div>
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<h4>Bring to new family</h4>
							<p>
								Ipsa sunt perferendis facere est quisquam et placeat nulla. Sunt in eius ut ea aliquid molestiae et iusto. Sed at corrupti eum. Iusto nihil labore debitis non qui aut qui molestiae dolor.
							</p>
						</div>
					</div>
				</div>
				<div id="guardians">
					<h3>Testimonials from our guardians</h3>
					<p>
						Who are in extremely love with eco friendly system
					</p>
					{/* x3 */}
					<div id="humans">
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<p>
								Totam omnis ex impedit. Ducimus sequi aspernatur et est dicta pariatur provident. Cupiditate porro at voluptatem explicabo error sit neque et. Ut omnis est.
							</p>
							<h4>Colleen Herman</h4>
							<p>Dynamic Tactics Supervisor</p>
						</div>
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<p>
								Totam omnis ex impedit. Ducimus sequi aspernatur et est dicta pariatur provident. Cupiditate porro at voluptatem explicabo error sit neque et. Ut omnis est.
							</p>
							<h4>Colleen Herman</h4>
							<p>Dynamic Tactics Supervisor</p>
						</div>
						<div>
							<img src="https://placehold.co/100x100" alt="" />
							<p>
								Totam omnis ex impedit. Ducimus sequi aspernatur et est dicta pariatur provident. Cupiditate porro at voluptatem explicabo error sit neque et. Ut omnis est.
							</p>
							<h4>Colleen Herman</h4>
							<p>Dynamic Tactics Supervisor</p>
						</div>
					</div>
				</div>
			</main>
			<footer id="footer">
				<h3>Want to help? Become a Volunteer</h3>
				<p>
					Officia qui qui rem tempore non impedit accusantium minima ut. Quo est quaerat voluptatem nemo qui. Vel velit fuga. Et corporis consequuntur omnis eos sint soluta facere dolores. Est ut alias quis velit beatae dolor suscipit eaque soluta. Est sunt unde quod aut sed quidem iste ipsa dolore.
				</p>
				<div id="footerbtns">
					<button>View PDF details</button>
					<button>Register now</button>
				</div>
			</footer>
		</>
	)
}

export default App
