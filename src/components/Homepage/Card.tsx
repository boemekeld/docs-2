import './Card.css'
interface Props {
	icon: string,
	title: string,
	description: string,
	link: string
}

const Card = (({ icon, title, description, link }: Props) => {
	return (
		<a className="card" href={link} title={title}>
			<div>
				<i>
					<img width="36" height="36" src={"https://www.azion.com" + icon} alt={title + "icon"} />
				</i>
				<div className="box-text">
					<h4 className="card-title"> {title} </h4>
					<p className="card-description"> {description} </p>
				</div>
			</div>
		</a>
	)
})

export default Card
