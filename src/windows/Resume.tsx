"use client"
import { WindowControl } from '@/app/components'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import react-pdf components with ssr disabled
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false })
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false })

// Import styles
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

const Resume = () => {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        
        // Set worker only in browser
        if (typeof window !== 'undefined') {
            import('react-pdf').then(({ pdfjs }) => {
                pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
            })
        }
    }, [])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
    }

    if (!isClient) return null

    return (
        <>
            <div className="window-header">
                <WindowControl target="resume" />
                <h2>Resume.pdf</h2>

                <a href="/files/resume.pdf" download className='cursor-pointer' title="download resume">
                    <Download className="icon" />
                </a>
            </div>
            <Document 
                file="/files/resume.pdf" 
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    pageNumber={1} 
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                />
            </Document>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')
export default ResumeWindow