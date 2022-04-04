var testName = ["Тема 1. Что изучает информатика?", "Тема 2. Единицы измерения информации", "Тема 3. Кодирование информации", "Тема 4. Устройство первонального компьютера",
"Тема 5. Состав первонального компьютера","Тема 6. Устройства ввода-вывода","Тема 7. Программное обеспечение компьютера"];
var dataVhodSelect = [];
var dataProvColor = [];
var dataVhodSelect1 = [];
var dataProvShortAnswer0 = [];
var dataProvShortAnswer1 = [];
var dataProvShortAnswer2 = [];
var dataProvShortAnswer3 = [];



//входные данные

function vhod(numberTest) {
	switch (numberTest) {
		case testName[0]:
			//входные данные для вывода на форму
			textMas = ["Текст", "Вся жизнь человека связана с информацией. Когда человек читает книгу, смотрит телевизор, разговаривает, он получает информацию.",
				"Информация – это сведения о мире вокруг нас.Слово информация произошло от латинского слова informatio – осведомление, разъяснение, изложение.",
				"Информация бывает различных видов:",
				"•	научная;", "•	техническая;", "•	политическая;", "•	экономическая;", "•	военная и т. д.",
				"Например, при решении задачи условие задачи – это исходная информация, математические вычисления – это обработка информации. Данные, которые получены в ходе решения задачи, – это результат обработки информации.",
				"Результаты обработки информации человек использует в своей деятельности.",
				"Количество информации быстро увеличивается. В настоящее время информацию собирают, хранят и обрабатывают с помощью электронно-вычислительных машин (ЭВМ) – компьютеров.",
				"Информатика – это наука о сборе, хранении, обработке и передаче информации."];
			dataVhodSelect = ["получает", "собирают", "обрабатывает", "обрабатывают", "увеличивается", "хранит", "использует"];
			masVhodSelect = [dataVhodSelect];
			//входные данные для проверки
			dataProvColor = [1, 2, 3, 4, 5, 6, 4, 3, 1, 5, 6, 4, 3, 1, 2, 3];
			shortAnswer0 = [["научная"], ["техническая"], ["политическая"], ["экономическая"], ["военная"], ["математические"], ["вычислительных"], [""], ["электронно"], [""]];
			masShortAnswer = [shortAnswer0];
			dataProvSelect = ["получает", "обрабатывает", "использует", "хранит", "увеличивается", "собирают", "обрабатывают"];
			masProvSelect = [dataProvSelect];
			numTextZad = 7;
			var dataProvDetailedAnswer0 = ["При решении задачи исходной информацией является условие задачи.",
				"При решении задачи обработкой информации являются математические вычисления.",
				"Науку о сборе, хранении и обработке информации называют информатикой."];
			var dataProvDetailedAnswer1 = ["Информация – это сведения о мире вокруг нас.",
				"Человек получает информацию когда человек читает книгу, смотрит телевизор, разговаривает.",
				"Информация бывает различных видов: научная, техническая, политическая, экономическая, военная.",
				"Условие задачи – это исходная информация.",
				"Математические вычисления – это обработка информации.",
				"Результаты обработки информации человек использует в своей деятельности.",
				"В настоящее время информацию собирают, хранят и обрабатывают с помощью электронно-вычислительных машин",
				"Информатика – это наука о сборе, хранении, обработке и передаче информации."];
			var dataProvDetailedAnswer2 = ["Название: Информация вокруг человека.\nВся жизнь человека связана с информацией и человек может как получать информацию, обрабатывать ее и передавать ее."];
			var dataProvDetailedAnswer3 = ["Когда человек читает книгу или газету, смотрит передачу по телевизору или слушает радио, разговаривает, он получает информацию.\nИнформация – это сведения о мире вокруг нас. Слово информация произошло от латинского слова informatio – осведомление, разъяснение, изложение.\nИнформация бывает различных видов:\n • научная;\n• техническая;\n• политическая;\n• экономическая;\n• военная и т. д.\nНапример, когда студент решает задачи исходной информацией является условие задачи, обработкой информации являются математические вычисления. Данные, которые получены в ходе решения задачи, – это результат обработки информации.\nРезультаты обработки информации человек использует в своей деятельности. Обработанную информацию человек хранит в библиотеках, в музеях, в своей памяти.\nКоличество информации быстро увеличивается. В настоящее время информацию собирают, хранят и обрабатывают с помощью электронно-вычислительных машин (ЭВМ) – компьютеров.\nНауку о сборе, хранении и обработке информации называют информатикой."];
			masDetailedAnswer = [dataProvDetailedAnswer0, dataProvDetailedAnswer1, dataProvDetailedAnswer2, dataProvDetailedAnswer3];
			break;
		case testName[1]:
			//
			textMas = ["Текст", "В настоящее время информацию собирают, хранят и обрабатывают. Количество информации можно измерить.",
				"Наименьшая единица информации в компьютере – 1 бит. Слово «бит» произошло от английского выражения Binary digiTs – двоичные цифры. Бит может иметь одно из двух значений: 0 или 1.",
				"В компьютерах используется запись информации в двоичной системе счисления. Количество информации измеряется при помощи подсчёта числа двоичных символов.",
				"Основная единица информации в компьютере – 1 байт. 1 байт равен 8 битам.",
				" 0  1  0  0  1  1  0  1",
				"1 байт", "Например, буква М содержит 1 байт информации. Если слово МАМА кодируется последовательностью из 32 цифр, то это слово содержит 32 бита, или 4 байта информации.",
				"Чтобы записать в двоичных кодах любую букву алфавита, цифру или специальный символ (. , : ; + – < > # $ & и т. д.), нужен один байт.",
				"Для измерения количества информации используют крупные единицы:", "1 килобайт (Кб) = 1024 байт;", "1 мегабайт (Мб) = 1024 килобайт;", "1 гигабайт (Гб) = 1024 мегабайт;", "1 терабайт (Тб) = 1024 гигабайт."];
			textMasOld = ["Текст из темы 1", "Вся жизнь человека связана с информацией. Когда человек читает книгу, смотрит телевизор, разговаривает, он получает информацию.",
				"Информация – это сведения о мире вокруг нас.Слово информация произошло от латинского слова informatio – осведомление, разъяснение, изложение.",
				"Информация бывает различных видов:",
				"•	научная;", "•	техническая;", "•	политическая;", "•	экономическая;", "•	военная и т. д.",
				"Например, при решении задачи условие задачи – это исходная информация, математические вычисления – это обработка информации. Данные, которые получены в ходе решения задачи, – это результат обработки информации.",
				"Результаты обработки информации человек использует в своей деятельности.",
				"Количество информации быстро увеличивается. В настоящее время информацию собирают, хранят и обрабатывают с помощью электронно-вычислительных машин (ЭВМ) – компьютеров.",
				"Информатика – это наука о сборе, хранении, обработке и передаче информации."];
			dataVhodSelect = ["используют", "кодируется", "можно измерить", "содержит", "принимает значения"];
			masVhodSelect = [dataVhodSelect];
			//
			dataProvColor = [1, 2, 3, 1, 4, 5, 6, 4, 7, 8, 9, 2, 6, 1, 3, 5, 7, 2, 8, 9, 8];
			var shortAnswer1 = [["6222"], ["688130"], ["704643962"], ["13045637"], ["125829120"], ["38654706009"], ["114301006"], ["9083813978"], ["91479367"]];
			var dataProvSelect = ["можно измерить", "принимает значения", "кодируется", "содержит", "содержит", "используют"];
			var shortAnswer0 = [["техническое"], ["техническая"], ["технический"], ["технические"], ["двоичные"], ["двичная"], ["двичные"], ["двоичный"], ["специальная"], ["специальный"], ["специальное"], ["специальные"], ["наименьшее"], ["наименьшая"], ["наименьшее"], ["наименьший"], ["наименьшие"]];
			var shortAnswer2 = [["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"],
			["информацию собирают", "информацию хранят", "информацию обрабатывают", "количество информации", "запись информации", "единица информации", "байт информации"]];
			var shortAnswer3 = [["наименьшая", "основная"], ["двоичный"], ["двоичный"], [], [], []];
			masShortAnswer = [shortAnswer0, shortAnswer1, shortAnswer2, shortAnswer3];
			kolDetailedAnswer = 5;
			numTextZad = 10;
			masProvSelect = [dataProvSelect];
			textMasOld = [];
			var dataProvDetailedAnswer0 = ["Основные понятия: единица информации, двоичная система счисления, байт, бит.\nНаименьшая единица информации в компьютере – 1 бит.Основная единица информации в компьютере – 1 байт."];
			var dataProvDetailedAnswer1 = ["1 байт равен 8 битам\n1 килобайт равен 1024 байт;\n1 мегабайт равен 1024 килобайт;\n1 гигабайт равен1024 мегабайт;\n1 терабайт равен 1024 гигабайт."];
			var dataProvDetailedAnswer2 = ["В настоящее время информацию собирают, хранят и обрабатывают."];
			var dataProvDetailedAnswer3 = ["Байт является основной единицей информации в компьютере",
				"Гигабайт является наибольшей единицей информации в компьютере",
				"Байт, килобайт, мегабайт и гигабайт – это единицы информации в компьютере"];
			var dataProvDetailedAnswer4 = ["Наименьшая единица информации в компьютере – 1 бит. Основная единица информации в компьютере – 1 байт. 1 байт равен 8 битам. Чтобы записать в двоичных кодах любую букву алфавита, цифру или специальный символ (. , : ; + – < > # $ & и т. д.), нужен один байт. Для измерения количества информации используют крупные единицы. Слово «информатика» содержит 11 байт информации."];
			masDetailedAnswer = [dataProvDetailedAnswer0, dataProvDetailedAnswer1, dataProvDetailedAnswer2, dataProvDetailedAnswer3, dataProvDetailedAnswer4];
			break;
		case testName[2]:
			//
			textMas = ["Текст", "Информация бывает <i>аналоговой</i> и <i>цифровой</i>. В обычной жизни человек использует аналоговую информацию. Аналоговая информация <i>непрерывна</i>, а цифровая – <i>дискретна</i>. В настоящее время самым лучшим устройством переработки и хранения информации является компьютер. Как известно, информация в компьютере хранится и обрабатывается в цифровой форме.",
				"Для машинной обработки информацию нужно записывать, обозначая буквы цифрами, т. е. <i>кодировать</i> её. Все буквы, цифры, изображения и звуки ЭВМ переводит в последовательность двух цифр 0 и 1. Такая последовательность называется <i>двоичным кодом</i>. Запись информации в двоичных кодах называется <i>кодированием</i> в двоичных кодах. Так как 8 двоичных символов составляют 1 байт, то говорят о системах «байтового» кодирования. Наиболее распространена система ASCII (American Standard Code for Information Interchange) (табл. 1).",
				"Например, в системе ASCII буква А кодируется как 11000000, а буква М – как 11001100, тогда слово МАМА кодируется последовательностью из 32 цифр:",
				"М  А  М  А",
				"11001100 11000000	11001100 11000000",
				"При выводе информации компьютер её декодирует.",
				"Таблица 1",
				"<img src=\"/images/image3.png\">",
				"Декодирование информации – это преобразование инфор-мации из двоичного кода в вид, понятный человеку.",
				"Кодирование и декодирование информации в двоичных кодах компьютер делает автоматически.",
				"В жизни мы часто встречаемся с кодированием и декодированием информации.Например, запись музыки на компактдиск – это кодирование, а воспроизведение музыки – это декодирование."];
			dataVhodSelect = ["переводит", "хранится", "называется", "называется", "декодирует", "обрабатывается", "преобразование"];
			masVhodSelect = [dataVhodSelect];
			//
			dataProvColor = [1, 2,3,4,5,6,4,7,1,8,3,5,4,9,2,7,6,4,9,8];
			var shortAnswer0 = [["аналоговые"],["цифровой"],["кодовый"],["смысловой"],["байтовый"],["последовательный"],["переводной"],["машинный"],["компьютерный"],["системный"]];
			var shortAnswer1 = [["кодирование"],["обрабатывание"],["изображение"],["декодирование"],["использование"],["записывание"],["преобразование"],["воспроизводение"],["представление"],["хранение"],["вычисление"],["вывод"],["перевод"],["состав"],["сбор"],["передача"],["основа"]];
			var shortAnswer2 = [["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"],
				["аналоговая ифнормация", "аналоговая", "цифровая информация", "цифровая", "неперерывная информация", "неперерывна", "дискретная информация", "дискретна", "кодировать", "двоичный код", "кодирование", "кодирование информации", "декодирование", "декодирование информации"]];
			var shortAnswer3 = [["текст"],["цифра"],["форма"]];
			masShortAnswer = [shortAnswer0, shortAnswer1, shortAnswer2, shortAnswer3];
			numTextZad = 9;
			kolDetailedAnswer = 4;
			dataProvSelect = ["переводит", "хранится", "называется", "называется", "декодирует", "обрабатывается", "преобразование"];
			masProvSelect = [dataProvSelect];
			break;
		case testName[3]:
			//
			textMas = ["Текст",
				"Все компьютеры состоят из одинаковых основных устройств: процессора, памяти, устройства ввода и устройства вывода.",
				"Обработка информации выполняется процессором.",
				"Процессор – это центральное устройство ЭВМ.",
				"Существует внутренняя и внешняя память компьютера. Внутренняя память используется для временного хранения данных и программ, внешняя – для долговременного их хранения. Память компьютера дискретна.",
				"Внутренняя память компьютера предназначена для опера-тивной обработки данных. Она является более быстрой, чем внешняя память. Выделяют следующие виды внутренней памяти:",
				"•	оперативная.В неё помещаются программы и данные.Она обладает большим быстродействием и является энерго - зависимой.Обозначается RAM(Random Access Memory) – память с произвольным доступом.Иначе оперативную память называют оперативным запоминающим устройством(ОЗУ);",
				"•	постоянная память (Basic Input-Output System – BIOS) – содержит программы для управления компьютером. Обозначается ROM (Read Only Memory). Иначе постоянную память называют постоянным запоминающим устройством (ПЗУ).",
				"Внешняя память предназначена для длительного хранения программ и данных. Это память большого объёма, но низкого быстродействия. Она представлена в основном магнитными и оптическими носителями.",
				"В состав внешней памяти компьютера входят:",
				"•	жёсткие диски;",
				"•	лазерные диски (компакт-диски объёмом 700 Мегабайт);",
				"•	DVD-диски (объёмом 4,7... 9,4 Гигабайт);",
				"•	Flash-карты (USB flash drive объёмом до 12 Гигабайт).",
				"Человек вводит данные в компьютер через устройства ввода (клавиатура, мышь, сканер, микрофон), а получает результат обра-ботки через устройства вывода (монитор, принтер, акустические колонки).",
				"Шина – это набор проводов, по которым происходит обмен информацией между устройствами компьютера."];
			var dataVhodSelect = ["хранит информацию", "выводит информацию", "вводит информацию", "обрабатывает информацию"];
			masVhodSelect = [dataVhodSelect];
			//
			dataProvColor = [1,2,3,1,1,1,2,3,3,4,5,6,7,3,5,6,4,7];
			var shortAnswer0 = [["управление", "ввод", "вывод"], ["управление", "ввод", "вывод"], ["управление", "ввод", "вывод"]];
			var shortAnswer1 = [["процессором"], ["основные устройства"], ["центральное"], ["оперативной памяти"], ["устройства ввода"], ["получают результат обработки"], ["происходит обмен информацией между устройствами компьютера"]];
			var shortAnswer2 = [["ОЗУ"],["ПЗУ", "внешняя"],["внешняя"],["ПЗУ"],["ОЗУ"]];
			masShortAnswer = [shortAnswer0, shortAnswer1, shortAnswer2];
			numTextZad = 5;
			kolDetailedAnswer = 2;
			dataProvSelect = ["обрабатывает информацию", "хранит информацию", "вводит информацию", "вводит информацию", "выводит информацию", "выводит информацию"];
			masProvSelect = [dataProvSelect];
			break;
		case testName[4]:
			//
			textMas = ["Текст",
				"Системный блок является главным блоком в компьютере. Он содержит процессор, внутреннюю память, внешнюю память и специальные устройства: видеокарту, звуковую карту, модем, сетевую карту.",
				"К системному блоку компьютера с помощью кабелей можно подключить различные устройства ввода-вывода информации,  такие устройства называются периферийными устройствами.",
				"Устройства ввода кодируют информацию путем ее перевода  из аналогового вида в цифровой.",
				"Клавиатура – это устройство для ввода символьной инфор-мации в компьютер.",
				"Мышь – это устройство, которое помогает вводить инфор-мацию в компьютер.",
				"Микрофон – это устройство для ввода в компьютер звуковой информации.",
				"Сканер – это устройство для ввода в компьютер графической информации.",
				"Устройства вывода декодируют информацию из цифрового вида в аналоговый.",
				"Монитор – это устройство вывода информации на экран.",
				"Акустические колонки – это устройство для вывода звуковой информации.",
				"Принтер – это устройство для печати текстовой и графи-ческой информации."
			];
			var dataVhodSelect = ["подключить", "чтения", "записи", "содержит", "является"];
			var dataVhodSelect1 = ["Системный блок", "Устройство ввода","Устройство вывода"];
			masVhodSelect = [dataVhodSelect, dataVhodSelect1];
			//
			dataProvColor = [1,2,3,4,5,2,4,6,7,8,9,1,10,11,3,12,6,7,9,2,8,11,1,10,12];
			dataProvDetailedAnswer0 = ["Устройство для ввода символьной информации в компьютер называется клавиатура.",
				"Устройство, которое помогает вводить информацию в компьютер, называется мышь.",
				"Устройство для ввода в компьютер звуковой информации называется микрофон.",
				"Устройство для ввода в компьютер графической информации называется сканер.",
				"Устройство вывода информации на экран называется монитор.",
				"Устройство для вывода звуковой информации называется акустические колонки.",
				"Устройство для вывода на печать текстовой и графической информации называется принтер.",
				"Набор проводов, по которым происходит обмен данными между устройствами компьютера называется шина."];
			dataProvDetailedAnswer1 = ["из системного блока, клавиатуры, монитора, мыши",
				"главным блоком в компьютере",
				"чтения информации с дискет",
				"для чтения информации с CD- и DVD-дисков ",
				"различные устройства ввода-вывода информации"];
			dataProvDetailedAnswer2 = ["6. Какой блок в компьютере является главным?/n3. Что содержит системный блок ?/n4. С помощью чего подключаются устройства к системному блоку ?/n1. Какие устройства можно подключить к системному блоку ?/n5. Что относится к основным устройствам компьютера ?/n2. Что относится к устройствам внешней памяти ?"];
			dataProvDetailedAnswer3 = ["1.	Системный блок/n2.	Устройства ввода/n3.	Устройства вывода"];
			var dataProvDetailedAnswer4 = ["Персональный компьютер состоит основных устройствах:  системного блока, устройств ввода: мышь и клавиатура, и устройства вывода: монитор."];
			shortAnswer0 = [["внешняя память", "внутренняя память", " внешняя память", "устройство ввода", "устройство вывода", "ввод информации", "вывод информации", "обмен информацией"],];
			dataProvSelect = ["является", "чтения", "подключить", "содержит"];
			var dataProvSelect1 = ["","","Системный блок","Системный блок","Устройство ввода","Устройство ввода","Устройство вывода","Устройство вывода","Устройство ввода","Устройство ввода","Системный блок","Системный блок","Устройство вывода","Устройство вывода","Устройство ввода",""];
			masProvSelect = [dataProvSelect, dataProvSelect1];
			masShortAnswer = [shortAnswer0];
			masDetailedAnswer = [dataProvDetailedAnswer0, dataProvDetailedAnswer1, dataProvDetailedAnswer2, dataProvDetailedAnswer3, dataProvDetailedAnswer4];
			break;
		case testName[5]:
			//
			//
			break;
		case testName[6]:
			//
			//
			break;
	};
	console.log("Входные данные переданы");
}