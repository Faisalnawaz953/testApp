import React from 'react'

export default function Button({ src, alt, btnText, clicked }) {
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<img src={src} alt={alt} />
				<button
					style={{
						borderRadius: 40,
						backgroundColor: '#ff3377',
						color: 'white',
						height: 40,
						outline: 'none',
						borderWidth: 0,
						fontWeight: 'bold',
						marginTop: 20,
					}}
					onClick={clicked}
				>
					{btnText}
				</button>
			</div>
		</div>
	)
}
