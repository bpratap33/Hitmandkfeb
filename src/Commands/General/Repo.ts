import { BaseCommand, Command, Message } from '../../Structures'

@Command('repo', {
    description: 'Get the base repo of the bot',
    category: 'general',
    aliases: ['script'],
    usage: 'repo',
    cooldown: 5,
    exp: 100
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
        const image = await this.client.utils.getBuffer('https://telegra.ph/file/1fed33d77671e79fe2c30.jpg')
        const result = await this.client.utils.fetch<RepoInfo>(
            'https://api.github.com/repos/Dkhitman3/Hitman'
        )
        let text = ''
        text += `*${result.name}* ✨\n\n`
        text += `✍🏻 *Author: ${result.owner.login}*\n`
        text += `⭐ *Star's: ${result.stargazers_count}*\n`
        text += `🍴 *Forks: ${result.forks_count}*\n`
        text += `⚠️ *Issues: ${result.open_issues_count}*\n`
        text += `🌐 *Visibility: ${result.visibility}*\n`
        text += `💠 *Language: ${result.language}*\n`
        text += `🛡️ *License: ${result.license.name}*\n`
        text += `🛡️ *Followers: ${result.followers}*\n`
        text += `🛡️ *Repository name: ${result.Repository.name}*\n`
        text += `⚙️ *Repo Link: ${result.html_url}*`
        return void (await M.reply(image, 'image', undefined, undefined, text))
    }
}

interface RepoInfo {
    name: string
    owner: {
        login: string
    }
    html_url: string
    description: string | null
    language: string
    stargazers_count: number
    watchers_count: number
    forks_count: number
    Followers: number
    Repository Name
    open_issues_count: number
    visibility: string
    license: {
        name: string
    }
    created_at: string
    updated_at: string
}
