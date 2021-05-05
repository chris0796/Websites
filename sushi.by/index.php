<!DOCTYPE html>

<html>
<?php 

		$connection=mysqli_connect('127.0.0.1','root','','delivery_db');
		if($connection == false){
			echo 'Не удалось подключится к базе данных';
			mysqli_connect_error();
			exit();
		}
		$result = mysqli_query($connection," SELECT * FROM `web` ");
		$sets = mysqli_query($connection,"SELECT * FROM `sushi_sets` ");
		$pizza=mysqli_query($connection,"SELECT * FROM `pizza` ")

?>
<head>

	<title><?php while(($record=mysqli_fetch_assoc($result))){
			echo '' . $record['title'] . '';
		} 
		?></title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link   rel="stylesheet" href="libs/fontawesome/all.min.css">
	<link rel="shortcut icon"  href="images/favicon.png">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="js/main.js"defer ></script>



</head>


 	

<body>
	

	<ul>
		
	</ul>




	<div class="wrapper">
		


		<?php 
			@include 'header.php';
		?>

		

		<div class="delivery">

			<div class="container">

				<div class="delivery_row">

					<p class="delivery_title">Доставка еды | Суши,роллы и пицца в Барнауле</p>

					<div class="slideshow-container">

						<div class="mySlides fade">
											
							<img src="images/sakura.jpg"  alt="" style="border-radius:5px">
							<div class="text">
								
							</div>
											



						</div>	

						

						

						

						

					</div>

					
					





				</div>
				



			</div>
			<!--Buttons for slider :)
			<a class="prev" onclick="plusSlides(-1)"  >
				<i class="fas fa-chevron-left"></i>
			</a>

			<a class="next" onclick="plusSlides(1)">
			  	<i class="fas fa-chevron-right" ></i>
			</a>
			-->
			



		</div>

		<section class="sets set-roll">

			<div class="container">

				<div class="sets_row">

					<p id="rolls">Сеты роллов</p>

					<div class="sets_columns">

						<?php while(($set=mysqli_fetch_assoc($sets))){
								


						?>	
						<div class="sets_item">
							
							

								

		 					
							<div class="sets_item_row_top">

								<img src="images/<?php echo $set['img']; ?>" alt="">

								<br><a   href="product.php?id=<?php echo $set['id']; ?>"  ><?php echo $set['title'];  ?></a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p><?php echo $set['weight'];  ?> гр.</p><br>
									<h2><?php echo $set['price']; ?> ₽</h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" id="count" name="count" value="1">
									<div>
										<button type="button"  ><i class="fas fa-sort-up"></i></button>
										<button type="button" ><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
							
							
								
							

						

						</div>
						<?php 

						}
						?>
						



					</div>
					




				</div>


			
			</div>
			
		</section>

		<section class="sets cold-set">

			<div class="container">

				<div class="sets_row">

					<p id="cold">Холодные роллы</p>

					<div class="sets_columns">

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#" >Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>

							
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/cold-roll1.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
							

						

						</div>



					</div>
					




				</div>


			
			</div>
			
		</section>

		<section class="sets cold-set">

			<div class="container">

				<div class="sets_row">

					<p id="hot">Горячие роллы</p>

					<div class="sets_columns">

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#" >Запеченный ролл с угрем</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>

							
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/zapech.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
							

						

						</div>



					</div>
					




				</div>


			
			</div>
			
		</section>

		<section class="sets pizza-set">

			<div class="container">

				<div class="sets_row">

					<p id="pizza">Пицца</p>

					<div class="sets_columns">


						<?php 
						while(($pizzas=mysqli_fetch_assoc($pizza)))
						{

						

						?>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/<?php echo $pizzas['img']; ?>" alt="">

								<br><a href="#" ><?php echo $pizzas['title']; ?></a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p style="font-size:18px;color:#111111;">33 см -<?php echo $pizzas['weight']; ?> </p><br>
									<h2><?php echo $pizzas['price']; ?>₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>

							
								
							

						

						</div>
						<?php 
						}
						?>
						

						



					</div>
					




				</div>


			
			</div>
			
		</section>

		<section class="sets drinks-set">

			<div class="container">

				<div class="sets_row">

					<p>Напитки</p>

					<div class="sets_columns">

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#" >Coca cola, 0,9 л</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>

							
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item">

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								

								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
								
							

						

						</div>

						<div class="sets_item" >

							<div class="sets_item_row_top">

								<img src="images/kola-klass.jpg" alt="">

								<br><a href="#">Сет Сакура</a><br><br>

								
								



							</div>
								
							<div class="sets_item_row_bottom">
								<div class="item-info">
									<p>1200гр</p><br>
									<h2>719₽ </h2>
								</div>
								
								<div class="sets-amount">
									<input class="count-field" type="text" name="count" value="1">
									<div>
										<button type="button"><i class="fas fa-sort-up"></i></button>
										<button type="button"><i class="fas fa-sort-down"></i></button>
									</div>
									
								</div>

								<button class="shop-cart" type="submit">
									<i class="fas fa-shopping-cart"></i>
								</button>

							</div>
							

						

						</div>



					</div>
					




				</div>


			
			</div>
			
		</section>

		<section class="about about-main">
			

			<div class="about-top">
				<div class="container">
					<div class="about-top_body">
						

							<div class="about-top_item about-item">
								<img src="images/about-1.png">
								<h2 class="about-top_title">Бесплатная доставка</h2>
								<div class="about-item_text">
									При заказе на сумму <br> от 500 рублей <br> (кроме отдаленных районов)
								</div>
							</div>

							<div class="about-top_item about-item">
								<img src="images/about-2.png">
								<h2 class="about-top_title">Качество</h2>
								<div class="about-item_text">
									Только из свежих <br>и натуральных ингридиентов
								</div>
							</div>

							<div class="about-top_item about-item">
								<img src="images/about-3.png">
								<h2 class="about-top_title"> Много начинки</h2>
								<div class="about-item_text">
									Свежей, вкусной, <br> правильно нарезанной
								</div>
							</div>

							<div class="about-top_item about-item">
								<img src="images/about-4.png">
								<h2 class="about-top_title">С нами выгодно</h2>
								<div class="about-item_text">
									Постоянные скидки, акции и <br> розыгрыши.
								</div>
							</div>

						
							
					</div>
				</div>
			</div>

			<div class="about-bottom">
				<div class="container">

					<div class="about-bottom_body">
						<div class="about-bottom_item bottom_item">
							<h2 class="bottom-item_title">Доставка роллов, суши и пиццы в Барнауле</h2>
							<div class="bottom-item_text">
								<p>Доставка суши, роллов и пиццы в Барнауле с каждым годом становится все популярнее, однако для того, чтобы самостоятельно приготовить блюда японской кухни, необходим некоторый опыт и специальное оборудование. Да и ингредиенты необходимые для приготовления роллов в обычных супермаркетах не встретишь, либо они продаются только в крупных объемах. Гораздо практичнее, быстрее и дешевле заказать доставку суши и пиццы на дом или на работу в компании «Фудзи Суши».</p><br>
								<p>Японская кухня давно полюбилась жителям Барнаула и без нее редко обходится небольшой корпоратив или день рождения.</p><br>
								<p>Все роллы в «Фудзи Суши» делаются вручную профессиональными поварами только из свежих ингредиентов.</p><br>
								<p>Доставка суши в Барнауле осуществляется курьерами, зоны доставки Вы можете посмотреть в соответствующем разделе.</p>
							</div>
						</div>

						<div class="about-bottom_item bottom_item">
							<h2 class="bottom-item_title">Заказ и оплата</h2>
							<div class="bottom-item_text">
								<p>Оформить заказ Вы можете на нашем сайте, по телефону 8(964)080-7797, либо написать нам в директ Вконтакте или Инстаграмме. Время доставки и варианты оплаты уточняйте у оператора. Так же Вы можете забрать свой заказ самостоятельно по адресу Малахова 79а. </p>
							</div>
						</div>

						<div class="about-bottom_item bottom_item">
							<h2 class="bottom-item_title">Меню Фудзи Суши</h2>
							<div class="bottom-item_text">
								<p>В нашем меню Вы можете выбрать дешевые роллы с угрем, с лососем, с мидиями, с крабом, с курицей, с креветкой, запеченные, жаренные, острые и вегетарианские.</p><br>
								<p>Самый популярный ролл – «ролл Филадельфия» Вы можете заказать как в классическом виде, так и с добавлением в начинку <a href="#">угря</a>,<a href="#">креветки</a> или <a href="#">огурца</a> . Так же есть вариация этого ролла, где он <a href="#">обернут в копченый угорь</a> c 3 сторон, вместо охлажденного лосося.</p><br>
								<p>Так же с недавних пор мы начали готовить <a href="#">пиццу</a>. Мы долго прорабатывали рецептуру теста и начинок, чтобы Вы могли с достоинством оценить нашу пиццу.  </p>
							</div>
						</div>




					</div>

				</div>
				
			</div>

			
			
		</section>

		<?php 
			@include 'footer.php';

		?>

		



		


	

	</div>









</body>









</html>