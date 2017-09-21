<?php
include '../header.html';
include 'app_explication.html';

$op = ['sub','shift','mix','xor'];
$type = ['A', 'B'];
?>
<script type="text/javascript" src="app.js"></script>
	<div class="row row-centered">
		<div class="col-xs-10 table-responsive">	
			<br/>
			<table class="text-center">
				<tr>
					<?php
						for($k = 1; $k <= 16; $k++)
						{
							echo '<td><input type="text" size="2" id=key_'.$k.' /></td>';

						}
					?>
				</tr>
			</table><br/>
			<table class="text-center">
				<tr>
					<?php
						for($k = 1; $k <= 16; $k++)
						{
							echo '<td><input type="text" size="2" id=key_exp_'.$k.' /></td>';

						}
					?>
				</tr>
			</table><br/>
		</div>
		<div class="col-xs-2">
			<br/>
			 <button onclick="applyOp_keySchedule()">
					correction : RoundKey
			 </button> 
		</div>	
	</div>
	<?php
		foreach($op as $o) {
			echo '<div class="row row-centered">';
				foreach($type as $t) {
					echo '<div class="col-xs-5 table-responsive">';	
						echo '<table class="text-center">';
							for($i = 0; $i <=3; $i++) {
								echo '<tr>';
									for($j = 1; $j <=4; $j++) {
										$temp = $o.'_'.($i*4+$j).'_'.$t;
										echo '<td><input type="text" size="2" id='.$temp.' /></td>';
									}
								echo '</tr>';   
							}
						echo '</table><br/>';
					echo '</div>';
				}
				echo '<div class="col-xs-2">';
					echo '<button onclick=
							"applyOp_'.$o.'(); copyOpArray(\''.$o.'\',[\''.$op[0].'\',\''.$op[1].'\',\''.$op[2].'\',\''.$op[3].'\']);">
							correction : '.$o;
					echo '</button>';
				echo '</div>';	
			echo '</div>';	
		}	
		
		include '../footer.html';
	?>
<script>
	genKey();
	genHexaForId("sub");
</script>
		
