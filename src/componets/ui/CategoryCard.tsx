import { FcBusinessman, FcPhone, FcTemplate } from "react-icons/fc"
import styles from './CategoryCard.module.scss'
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from 'gsap'
import Draggable from "gsap/src/Draggable"
export default function CategoryCard() {

    const router = useNavigate()
    const aboutCardRef = useRef<HTMLLIElement>(null)
    const projectCardRef = useRef<HTMLLIElement>(null)
    const contactCardRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (aboutCardRef.current && projectCardRef.current && contactCardRef.current) {
            gsap.registerPlugin(Draggable)

            Draggable.create(aboutCardRef.current)
            Draggable.create(projectCardRef.current)
            Draggable.create(contactCardRef.current)
        }

    }, [])

    const pageSwitch = (element: HTMLLIElement, path: string) => {
        gsap.to(element, {
            scale: 100, ease: 'bounce.inOut', onComplete() {
                router(`/${path}`)

            }
        })
    }

    return (
        <ul className={styles.cards}>
            <li ref={aboutCardRef}
                onMouseLeave={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { rotate: -360, duration: 0.1, scale: 1 })

                }}
                onMouseEnter={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { ease: 'power2.inOut', duration: 0.1, scale: 1.5 })
                }}
                onClick={(e) => {
                    const element = e.currentTarget
                    pageSwitch(element, 'about')
                }} className={styles.card}>
                <span><FcBusinessman /></span>
                <h2>About Me</h2>

            </li>
            <li ref={projectCardRef}
                onMouseLeave={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { rotate: -360, duration: 0.1, scale: 1 })

                }}
                onMouseEnter={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { ease: 'power2.inOut', duration: 0.1, scale: 1.5 })
                }}

                onClick={(e) => {
                    const element = e.currentTarget
                    pageSwitch(element, 'projects')
                }} className={styles.card}>
                <span><FcTemplate /></span>
                <h2>Project</h2>
            </li>
            <li ref={contactCardRef}
                onMouseLeave={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { rotate: -360, duration: 0.1, scale: 1 })

                }}
                onMouseEnter={(e) => {
                    const element = e.currentTarget
                    gsap.to(element, { ease: 'power2.inOut', duration: 0.1, scale: 1.5 })
                }}

                onClick={(e) => {
                    const element = e.currentTarget
                    pageSwitch(element, 'contact')
                }} className={styles.card}>
                <span><FcPhone /></span>
                <h2>Contact Me</h2>
            </li>
        </ul>
    )
}