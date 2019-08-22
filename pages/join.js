import '@zeit-ui/style'
import Head from 'next/head'

const Text = `
  隶属于\`泸溪职业中学网页设计专业\`
  我们热爱开源
  欢迎加入我们

  目前社区暂时由\`@MrYang-Web\`全权负责
  需要加入可给我发送邮件: chenhonzhou@gmail.com
  我们的\`TG\`群: @luxizhizhong
`

const Users = [
  `d1y`,
  `76k`,
  `MrYang-Web`,
  `Goigogo`,
  `JinBaoFs`,
  `byformer`,
  `Not-See`,
  `wenXYH`,
  `Yliangg`
]

const Join = ()=> (
  <div className="zi-main zi-layout">
    <Head>
      <title> /Join </title>
      <link rel="icon" href="https://github.com/favicon.ico" />
    </Head>
    <img src="https://i.loli.net/2019/04/19/5cb94c02ab753.jpg"></img>
    <a href="/"><code>🚑 回首页</code></a>
    <h1># Developer Center</h1>
    <pre>{ Text }</pre>
    <h2># Team Users</h2>
    <p><code>在下方公布项目组成员</code></p>
    <table>
      <tr> 
        <th>Github ID</th> 
        <th>Avatar</th> 
      </tr> 
      {Users.map(item=> {
        return (
           <tr>
            <td>
              <a href={"https://github.com/"+item}>
                { item }
              </a>
            </td> 
            <td>
              <img class="zi-avatar big" src={"https://avatars.githubusercontent.com/"+item} />
            </td> 
          </tr>
        )
      })}      
    </table>
    <p>copyright @luxizhizhong create by <code>@d1y</code> date: 2019-08-23</p>
    <p>
      <img style={{ marginTop: `2rem` }} src="https://i.loli.net/2019/04/19/5cb9815333291.gif"></img>
    </p>
    <div class="zi-more">
      <button class="zi-btn circular small auto">
        打工是不可能打工的, 这辈子都不可能的
        <i class="suffix zi-icon-down"></i>
      </button>
    </div>
  </div>
)

export default Join