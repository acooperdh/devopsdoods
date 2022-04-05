import Link from 'next/link'
export default function Home(){
	return (
		<div>
			<Link href='/home' passHref>
				<button>Home</button>
			</Link>
			<h1> This is the home page</h1>
		</div>
	)
}