import Link from 'next/link'
export default function SignUp(){
	return (
		<div>
			<Link href='/' passHref>
				<button>Home</button>
			</Link>
			<h1> This is the signup page</h1>
		</div>
	)
}