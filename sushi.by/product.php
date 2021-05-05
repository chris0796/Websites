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

?>
<head>

	<title>Фудзи Суши</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link   rel="stylesheet" href="libs/fontawesome/all.min.css">
	<link rel="shortcut icon"  href="images/favicon.png">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="js/main.js"defer ></script>




</head>


 	

<body>

	<div class="wrapper">
		<?php @include 'header.php'; ?>

		<?php 
			$product=mysqli_query($connection," SELECT * FROM `sushi_sets` WHERE `id`= " . (int) $_GET['id'] );
			if(mysqli_num_rows($product) <= 0){
		?>

				<h3>Товар  не найден</h3>
		<?php 
			}
			else
			{
			$pro=mysqli_fetch_assoc($product);

		?>
			<div class="sets_columns">

						
								


							
						<div class="sets_item sets_product ">
							
							

								

		 					
							<div class="sets_item_row_top sets_product_row">

								<img src="images/<?php echo $pro['img_b']; ?>" alt="">
								<div>
									
									<br><a class="product_title"   href="product.php"  ><?php echo $pro['title'];  ?></a><br><br>

									<div class="description">
										<?php echo $pro['description'] ?>
									</div>

								</div>


								
								



							</div>

								
							<div class="sets_item_row_bottom product_row_bottom">

								<div class="item-info product-info">
									<p >Вес: <?php echo $pro['weight'];  ?> гр</p><br>
									<h2><?php echo $pro['price']; ?> ₽</h2>
								</div>
								
								<div class="cart-block">
									<div class="sets-amount">
										<input class="count-field" type="text" id="count" name="count" value="1">
										<div>
											<button type="button"  ><i class="fas fa-sort-up"></i></button>
											<button type="button" ><i class="fas fa-sort-down"></i></button>
										</div>
									
									</div>
									<button  class="shop-cart cart-text" type="submit">
										В корзину
									</button>
								</div>

								

							</div>
							
							
								
							

						

						</div>
						
						



					</div>





		<?php 

			}
		?>

		 

		 
			
			

		

		<?php @include 'footer.php'; ?>

		


	

	</div>









</body>









</html>


