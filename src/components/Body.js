import React, { useState } from 'react'
import MdRestaurant from 'react-ionicons/lib/IosRestaurantOutline'
import Image1 from '../assets/ghost-menu.jpg'
import Image2 from '../assets/ghost-recipe.jpg'
import Button from './Button'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		height: '90vh',
		outline: 'none',
		borderRadius: 30,
		width: '30%',
	},
}))
export default function Body() {
	const history = useHistory()
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				width: '100%',
				justifyContent: 'center',
				marginTop: 50,
				flexDirection: 'column',
			}}
		>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<CloseIcon style={{ margin: 20 }} onClick={handleClose} />
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								margin: 10,
							}}
						>
							<h2>FA ETT SKRADDARSYTT</h2>
							<h2>MENYFORSLAG</h2>

							<p style={{ textAlign: 'center' }}>
								Vi kommer nu stalla nagra korta fragar for att kunna skapa ett
								menyforslag med recept som vi hoppas passar dig.
							</p>
							<button
								style={{
									marginTop: 320,
									borderRadius: 40,
									backgroundColor: '#ffff66',
									width: 200,
									height: 40,
									outline: 'none',
									borderWidth: 0,
									fontWeight: 'bold',
									textAlign: 'center',
								}}
							>
								SKAPA MENYFORSLAG
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
			<MdRestaurant fontSize="60px" />
			<text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 25 }}>
				PLANERA MALTIDER
			</text>

			<text style={{ marginTop: 20, fontSize: 25 }}>
				Valj vad ni ska ata framover
			</text>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '50%',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginTop: 40,
				}}
			>
				<Button
					src={Image1}
					alt="ghost-menu"
					btnText="FA PERSONLIGT MENYFORSLAG"
					clicked={handleOpen}
				/>

				<text>eller</text>
				<Button
					src={Image2}
					alt="ghost-recipe"
					clicked={() => {
						history.push('/second-page')
					}}
					btnText="VALJ RECEPTSJALY"
				/>
			</div>
		</div>
	)
}
