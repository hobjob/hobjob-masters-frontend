import { Image } from './IImage'

export interface DraftLessonMaterial {
	title: string
	file: string
}

export interface DraftLessonVideo {
	fileNameUser: string
	fileNameSystem: string
	indexFile: string
	path: string
	duration: string
}

export interface DraftLesson {
	title: string
	description: string
	image: Image,

	video: DraftLessonVideo

	materials: DraftLessonMaterial[]
}

export interface Draft {
	masterId: string

	createDate: string
	updateDate: string

	title: string
	description: string
	image: Image,

	path: string
	category: string

	lessons: DraftLesson[],

	skills: { title: string, description: string }[],
	useSkills: { title: string, description: string }[],
	tools: { title: string }[],
}