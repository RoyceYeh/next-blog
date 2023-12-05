import Menu from "../../components/Menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src='/p1.jpeg' alt='img' fill className={styles.image} />
						</div>
						<div className={styles.userTextContainer}>
							<span>Davis Ian </span>
							<span>2023.11.27 </span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src='/p1.jpeg' alt='img' fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis corporis quam delectus minus eum culpa aspernatur? Aspernatur ipsa harum voluptates atque illo quas quam modi, vitae accusantium nesciunt sunt.</p>
						<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, pariatur!</h3>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis corporis quam delectus minus eum culpa aspernatur? Aspernatur ipsa harum voluptates atque illo quas quam modi, vitae accusantium nesciunt sunt.</p>
						<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, pariatur!</h3>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis corporis quam delectus minus eum culpa aspernatur? Aspernatur ipsa harum voluptates atque illo quas quam modi, vitae accusantium nesciunt sunt.</p>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis corporis quam delectus minus eum culpa aspernatur? Aspernatur ipsa harum voluptates atque illo quas quam modi, vitae accusantium nesciunt sunt.</p>
					</div>
					<Comments />
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default SinglePage;
