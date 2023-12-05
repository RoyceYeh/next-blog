import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
	return (
		<div className={styles.cantainer}>
			<h1 className={styles.title}>Royce' Blog</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src='/p1.jpeg' alt='=' fill sizes='100%' className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Title</h1>
					<p className={styles.postDesc}> Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus quos dolor obcaecati porro, iure ea, repellendus deserunt debitis in eum. Sequi fugit vero ratione.</p>

					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
