import React from 'react'
import './style.css'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import EmojiFoodBeverageOutlinedIcon from '@material-ui/icons/EmojiFoodBeverageOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
import { green } from '@material-ui/core/colors'

export default function Navbar() {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					border: '1px solid white',
					boxShadow: '2px 2px #f5f5f0',
					height: 90,
					backgroundColor: 'white',
				}}
			>
				<div style={{ paddingLeft: 150 }}>
					<text
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							fontFamily: 'sans-serif',
							letterSpacing: 4,
						}}
					>
						GASTROFY
					</text>
				</div>
				<div>
					<text
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							fontFamily: 'Trebuchet MS',
							color: '#ff99ff',
						}}
					>
						Min meny
					</text>
					<text>
						<ArrowRightAltOutlinedIcon
							fontSize="small"
							style={{ color: '#e0e0d1' }}
						/>
					</text>
					<text
						style={{
							fontSize: 25,
							fontWeight: 'bold',
							fontFamily: 'Trebuchet MS',
							color: '#e0e0d1',
						}}
					>
						Mina varor
					</text>
				</div>
				<div
					style={{
						width: '15%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',

						paddingRight: 150,
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',

							alignItems: 'center',
						}}
					>
						<ShoppingBasketOutlinedIcon
							fontSize="large"
							style={{ color: green[200] }}
						/>
						<text
							style={{ fontSize: 10, textAlign: 'center', color: green[200] }}
						>
							Min matkasse
						</text>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',

							alignItems: 'center',
						}}
					>
						<EmojiFoodBeverageOutlinedIcon
							fontSize="large"
							style={{ color: '#e0e0d1' }}
						/>
						<text style={{ fontSize: 10, textAlign: 'center' }}>laga</text>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',

							alignItems: 'center',
						}}
					>
						<PersonOutlineOutlinedIcon
							fontSize="large"
							style={{ color: '#e0e0d1' }}
						/>
						<text style={{ fontSize: 10, textAlign: 'center' }}>lagga in</text>
					</div>
				</div>
			</div>
		</div>
	)
}
