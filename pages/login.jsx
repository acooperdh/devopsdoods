import Link from 'next/link'
export default function Login(){
	return (
		<div>
			<Link href='/home' passHref>
				<button>Home</button>
			</Link>
			<h1> This is the login page</h1>
		</div>
	)
}