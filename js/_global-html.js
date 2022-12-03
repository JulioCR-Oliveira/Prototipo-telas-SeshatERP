$("document").ready(function() {
	$("#global").html(`<header id="header">
		<div id="logo"><img src="img/logo.png" alt="Seshat ERP" id="logo_img" /></div>
		<nav id="nav-bar" class="clearfix">
			<ul>
				<li><a href="index.html">Página inicial</a></li>
				<li><a href="fichas.html">Fichas Técnicas</a></li>
				<li><a href="*">Materiais e fornecedores</a></li>
				<li><a href="*">Financeiro</a></li>
			</ul>
		</nav>
	</header>

	<section id="content" class="clearfix">
		<main id="principal">
			
		</main>
		${createAside()}

	</section>
	`);			
	
	let content = $("#principal");
	let tempContent = $("#temp-content");
	content.html(tempContent.html() + content.html());
	tempContent.remove();
	
	$("footer").html("Seshat ERP &copy;");
});

function createAside() {
	return `
		<aside>
			<div id="login">
				<form id="login_form">
					<label for="user">Usuário: </label>
					<br/>
					<input type="text" id="user" name="user" />
					<br/>
					<label for="Password">Senha: </label>
					<br/>
					<input type="Password" id="Password" name="Password" />
					<br/>
					<input type="submit" value="Log-in" />
				</form>
				
				<div class="acesso-rapido-semana">
					<h4>Semana atual</h4>
					<ul>
						<li>Ficha produto 1</li>
						<li>Ficha produto 2</li>
						<li>Ficha produto 3</li>
						<li>Ficha produto 4</li>
					</ul>
				</div>
			</div>
			
			<div class="acesso-rapido-semana">
					<h4>Próxima semana</h4>
					<ul>
						<li>Ficha produto 1</li>
						<li>Ficha produto 2</li>
						<li>Ficha produto 3</li>
						<li>Ficha produto 4</li>
					</ul>
				</div>
		</aside>
	`;
};