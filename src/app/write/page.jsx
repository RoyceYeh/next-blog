"use client";

import Image from "next/image";
import styles from "./write.module.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const WritePage = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	const { status } = useSession();
	const router = useRouter();
	// console.log(data, status)
	if (status === "loading") {
		return <div className={styles.loading}>Loading...</div>;
	}
	if (status === "authenticated") {
		router.push("/");
	}

	return (
		<div className={styles.container}>
			<input type='text' placeholder='Title' />
			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src='/plus.png' alt='' width={16} height={16} />
				</button>
				{open && (
					<div className={styles.add}>
						<button className={styles.addButton}>
							<label htmlFor='image'>
								<Image src='/image.png' alt='' width={16} height={16} />
							</label>
						</button>
						<button className={styles.addButton}>
							<Image src='/external.png' alt='' width={16} height={16} />
						</button>
						<button className={styles.addButton}>
							<Image src='/video.png' alt='' width={16} height={16} />
						</button>
					</div>
				)}
				<ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
				<button className={styles.publish}>Publish</button>
			</div>
		</div>
	);
};

export default WritePage;
