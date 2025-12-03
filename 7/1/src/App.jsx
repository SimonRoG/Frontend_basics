import kyivPic from './assets/Kyiv.jpg'
import './App.css'
import React from 'react'
import { ButtonAdd, ButtonBigger, ButtonSmaller, ButtonRemove } from './Buttons.jsx'

function App() {
	const kyivfoto = React.useRef(null);

	return (
		<>
			<h2>Прохода Семен Сергійович</h2>
			<p>Народжений: дд.мм.рррр, м. Луганськ</p>
			<h3>Освіта:</h3>
			<ul>
				<li id="education">Гімназія , м. Київ</li>
				<li id="education2">НТУУ КПІ, м. Київ</li>
			</ul>
			<h3>Хобі:</h3>
			<ul>
				<li>Комп'ютерні ігри</li>
				<li>Мікроконтролери</li>
				<li>Спорт</li>
			</ul>
			<h3>Улюблені книги:</h3>
			<ol>
				<li>"Алхімік", Пауло Коельо</li>
				<li>"Хіба ревуть воли, як ясла повні?", Панас Мирний</li>
				<li>"Майстер і Маргарита", Михайло Булгаков</li>
			</ol>
			<h3>Київ</h3>
			<p>
				Ки́їв — столиця та найбільше місто України. Розташований у середній течії
				Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний,
				транспортний, освітньо-науковий, історичний, культурний та духовний центр
				України. У системі адміністративно-територіального устрою України Київ має
				спеціальний статус, визначений Конституцією, і не входить до складу жодної
				області, хоча і є адміністративним центром Київської області. Місце
				розташування центральних органів влади України, іноземних місій,
				штаб-квартир більшості підприємств і громадських об'єднань, що працюють в
				Україні.{" "}
			</p>
			<a href="https://kyivcity.gov.ua/">
				<img ref={kyivfoto} id="kyivfoto" src={kyivPic} alt="Київ" />
			</a>
			<div id="btns">
				<ButtonAdd kyivfoto={kyivfoto} />
				<ButtonBigger kyivfoto={kyivfoto} />
				<ButtonSmaller kyivfoto={kyivfoto} />
				<ButtonRemove kyivfoto={kyivfoto} />
			</div>
		</>
	)
}

export default App
