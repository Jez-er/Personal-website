import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import heroData from '../config/hero.json'

export default function Hero() {
	const frameRef = useRef(null)

	const handleMouseMove = e => {
		if (!frameRef.current) return
		const rect = frameRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left - rect.width / 2
		const y = e.clientY - rect.top - rect.height / 2
		frameRef.current.style.transform = `rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg)`
	}

	const handleMouseLeave = () => {
		if (frameRef.current) {
			frameRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)'
		}
	}

	return (
		<section className='hero section' id='home'>
			<div className='hero-orbit orbit-a'></div>
			<div className='hero-orbit orbit-b'></div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='hero-copy'
			>
				<p className='eyebrow'>
					<span className='status-dot'></span> {heroData.statusText}
				</p>
				<h1>
					{heroData.headingMain}
					<em>{heroData.headingItalic}</em>
					{heroData.headingEnd}
				</h1>
				<p className='hero-text'>{heroData.description}</p>

				<div className='hero-actions'>
					<a className='btn btn-primary' href={heroData.primaryActionHref}>
						<span>{heroData.primaryActionText}</span>
						<ArrowUpRight
							className='w-4 h-4 ml-1 inline-block'
							strokeWidth={2}
						/>
					</a>
					<a
						className='btn btn-ghost'
						href={heroData.secondaryActionHref}
						download
					>
						<span>{heroData.secondaryActionText}</span>
						<ArrowDown
							className='w-4 h-4 ml-1 inline-block text-[#285243]'
							strokeWidth={2}
						/>
					</a>
				</div>

				<div className='hero-meta'>
					<span>{heroData.metaLocation}</span>
					<span>{heroData.metaExperience}</span>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, delay: 0.15 }}
				className='hero-visual'
			>
				<div
					ref={frameRef}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className='photo-frame'
				>
					<img src='/profile.jpg' alt='Andriy Chernenko' />
					<div className='photo-label bottom'>{heroData.photoLabelBottom}</div>
				</div>

				<div className='floating-card'>
					<Sparkles className='w-4 h-4 text-[#bfd0c8]' strokeWidth={2} />
					<div>
						<strong>{heroData.floatingTitle}</strong>
						<small>{heroData.floatingSubtitle}</small>
					</div>
				</div>
			</motion.div>
		</section>
	)
}
