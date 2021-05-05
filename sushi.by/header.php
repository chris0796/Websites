<?php 

		$connection=mysqli_connect('127.0.0.1','root','','delivery_db');
		if($connection == false){
			echo 'Не удалось подключится к базе данных';
			mysqli_connect_error();
			exit();
		}
		$result = mysqli_query($connection," SELECT * FROM `web` ");

?>



<div class="header__top">

			<div class="container">

				<div class="header__top_row">

					<div class="header__top_left">

						<div class="address"><i class="fas fa-map-marker-alt"></i><p>г. Барнаул, ул. Малахова, 79а</p> </div>

						<div class="shedule"><i class="fas fa-clock"></i><p>Приём заказов: c 11:00 - 22:00 Без выходных</p></div>
						

					</div>

					<div class="header__top_right">
						
						<div class="phone">
							<i class="fas fa-phone-alt"></i><a href="tel:+79640807797">+7 (964) 080-77-97</a>


						</div>	
					</div>
					



				</div>
				



			</div>
			




		</div>

		<div class="header__bottom">

			<div class="container">

				<div class="header__bottom_row">


					<div class="header__bottom_logo">
						
						<img src="<?php while(($record=mysqli_fetch_assoc($result)))
						{
							echo $record['logo'];
						} ?>" alt="">
					</div>

					<div class="header__menu">

						<ul>
							<li class="first" ><a href="#rolls">СЕТЫ РОЛЛОВ</a></li>
							<li class="second"><a href="#cold">ХОЛОДНЫЕ РОЛЛЫ</a></li>
							<li class="third"><a href="#hot">ГОРЯЧИЕ РОЛЛЫ</a></li>
							<li class="last"><a href="#pizza">ПИЦЦА</a></li>
						</ul>
						


					</div>

					<div class="header__cart">
						<div class="header__cart_row">
							
						<i class="fas fa-shopping-cart" ></i>
						<p><span>(0)</span></p>

						</div>
						
						



					</div>
					<div class="dark-screen"></div>
					<div class="mobile-menu">
						<span></span>
						<span></span>
						<span></span>
					</div>

					
					

					
					




				</div>
				



			</div>
			


		</div>









