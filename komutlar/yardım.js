module.exports = {
    name: "KomutAdı",
    aliases: ["alernatif2","alternatif2"],
    description: "Komut açıklaması",
    usage: "kullanımı",
    ownerOnly: false,
    //Komutun herkese açık mı,
    //ya da sadece geliştiricilere özel mi olduğunu belirtirsiniz.
    run: async (message,args,client) => {
   
   message.channel.send("Bu bir test mesajıdır.")
    }
}