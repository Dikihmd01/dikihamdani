import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        // read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // use gray matter to parse the post meta data section
        const matterResult = matter(fileContents)

        // combine the data with id
        return {
            id,
            ...matterResult.data
        }
    })

    // sort posts by date
    return allPostData.sort(({ date: a }, { date: b} ) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}