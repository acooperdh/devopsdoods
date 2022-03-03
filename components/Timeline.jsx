import React, { useState } from 'react';
import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import NavBar from './NavBar'
import styles from '../styles/Timeline.module.css'
export default function Timeline(){
	

	return (
		<div className={styles.container}>
			<NavBar />
			<Heading size="xl"> User timeline </Heading>
			<SimpleGrid columns={3} spacing={10}>
				<BlogCard /> 
				<BlogCard /> 
				<BlogCard />
				<BlogCard /> 
				<BlogCard /> 
				<BlogCard />
				<BlogCard /> 
				<BlogCard /> 
				<BlogCard />
			</SimpleGrid>
		</div>
	)
}
