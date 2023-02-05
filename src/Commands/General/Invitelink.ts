import { BaseCommand, Command, Message } from '../../Structures'
import { AnyMessageContent } from '@adiwajshing/baileys'

@Command('invitelink', {
    description: 'invitelink',
    category: 'general',
    usage: 'invitelink',
    cooldown: 5,
    exp: 10,
    dm: true
})
export default class command extends BaseCommand {
    override execute = async (M: Message): Promise<void> => {
        let text = ''
        let (!M.groupMetadata) return void M.reply('*Try Again!*')
        for (let i = 0; i < invitelink.length; i++) {
            const { subject } = await this.client.groupMetadata(M.from[invitelink])
            const code = await this.client.groupInviteCode(M.from[invitelink])
            text += `\n*#${i + 1}*\n*${subject}:* *https://chat.whatsapp.com/${code}*\n`
            if (!invitelink) invitelink = `https://chat.whatsapp.com/${code}`
        }
        await this.client.sendMessage(M.sender.jid, {
            text
        } as unknown as AnyMessageContent)
        return void M.reply('Sent the group links in your DM')
    }
}
