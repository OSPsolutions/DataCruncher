/*
 * DataCruncher
 * Copyright (c) Mario Altimari. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

_alert = {
    "selectRecord": "Пожалуйста, выберите запись",
    "createAppDB": "Сначала необходимо создать приложение и базу данных",
    "createApp": "Сначала необходимо создать приложение",
    "editNotPermitted": "Вы не можете редактировать поля этой схемы",
    "loadNotPermittedStep1": "Эта функция не допустима для данного вида схемы",
    "loadNotPermittedStep2": "Эта функция не допускается, поскольку Есть поля в схеме",
    "loadNotPermittedStep3": "This feature is not allowed for this type of schema. Select schema of type XML or XMLEXI",
    "fillFields": "Заполните все поля",
    "errorSelectRecord": "Ошибка Выберите запись",
    "nameFieldRequired": "Имя поля обязательно",
    "saveOrCancelChanges": "Вы должны сохранить или отменить изменения",
    "errorXsdExport": "XSD не может быть экспортирован",
    "updateRecord": "Запись успешно изменена",
    "insertTrace": "Введите поток информации для проверки",
    "minlengthFieldRequired": "The min length field is required",
    "maxlengthFieldRequired": "The max length field is required",
    "sizeFieldRequired":"The size field is required",
    "invalidMinLengthField":"Minimum field's value should be greater than zero",
    "invalidMinCompareValue":"Minimum field's value should be less than or equal to max value",
    "invalidMaxLengthField":"Maximum field's value should be greater than or equal to max value",
    "invalidMaxCompareValue":"Maximum field's value should be less than size field's value",
    "minInclusiveFieldRequired": "The min inclusive field is required",
    "maxInclusiveFieldRequired": "The max inclusive field is required",
    "invalidMinInclusiveField":"Minimum inclusive field's value should be greater than zero",
    "invalidMinInclusiveCompareValue":"Minimum inclusive field's value should be less than max inclusive value",
    "invalidMaxInclusiveCompareValue":"Maximum inclusive field's value should be greater than the min inclusive value",
    "invalidMaxInclusiveSizeValue":"Maximum inclusive field's value should be less than the size field's value",
    "addRecord": "Record added successfully",
    "noStreamData": "Поток не может быть сохранен: нет данных",
    "chooseTree": "Пожалуйста, выберите вершину в дереве выше",
    "fieldWithoutDbLink" : "Пожалуйста, выберите вершину, которая имеет связь с БД",
    "serverDown" : "Извините, на стороне сервера произошли ошибки. Возможно, сервер отключен. <br/>Пожалуйста, попытайтесь перезапустить данную страницу позже.",
    "schemaWithoutLinkedToDbFields" : "Схема должна иметь как минимум одно поле связанное с базой данных.",
    "sqlDeleted" : "Sql запрос удален из базы данных",
    "sqlSaved" : "Sql запрос сохранен в базу данных",
    "selectDBRecord" : "Please select a record from list of database record"
};

_error = {
    "connectionError": "Ошибка соединения с сервером",
    "invalidFileExtError": "Пожалуйста, выберите XSD файл",
    "invalidXSDFileError": ". Ошибка при разборе файла XSD: Пожалуйста, выберите действующий XSD файл",
    "invalidCredentials": "Неверное имя пользователя или пароль",
    "invalidCaptcha": "Неверный знак CAPTCHA",
    "nameExistError":"Имя уже существует",
    "userNotEnabled":"Пользователь недоступен",
    "userNameRequired":"Требуется имя пользователя",
    "emailRequired":"Требуется электронная почта",
    "noRecordFound":"Ни одна запись не найдена",
    "stringEmptyError":"Пожалуйста введите последовательность со значением",
    "valueEmptyError":"Пожалуйста введите значение",
    "errorEmptyError":"Пожалуйста введите тип ошибки",
    "dateEmptyError":"Пожалуйста введите данные",
    "decimalValueError":"Пожалуйста введите действительное десятичное значение",
    "plannedNameError": "Пожалуйста, выберите предполагаемое имя",
    "shootDateError": "Пожалуйста  выберите дату",
    "shootTimeError": "Пожалуйста, введите время",
    "delimiterEmptyError": "Пожалуйста, введите разделитель значения",
    "schemaEmptyFieldError": "Эта схема без полей",
    "minuteSelectError":"Пожалуйста выберите минута",
    "hourSelectError":"Пожалуйства выберите час",
    "daySelectError":"Пожалуйста выберите день",
    "monthSelectError":"Пожалуйста выберите месяц",
    "weekSelectError":"Пожалуйста виберите неделю",
    "dateSelectError":"Пожалуйста выберите дату",
    "timeError":"Пожалуйста введите время",
    "databaseInputError":"Пожалуйста выберите ввод данных",
    "databaseStoreError":"Пожалуйста выберите хранилище данных",
    "invalidTimeFormatError":"Invalid Time Format. Please specify time in hh:mm format",
    "serviceDisabledError":"Service is disabled so, you can't download file",
    "everySecondError":"Every Second value must be greater than 0",
    "fileDownloadError":"File doesn't exist on server so, file can't be downloaded",
    "invalidImportFileExtError":"Please select .jv file",
    "descFieldRequired": "The min length of description field is required",
    "regExpFieldRequired": "The Regular Expression field is required",
    "recordEditError": "Selected record can't be edited",
    "recordDeleteError": "Selected record can't be deleted",
    "trimcharEmptyError":"Please enter trim character value",
    "streamValidationRequired":"Please select Custom Stream Validation",
    "streamGenerationRequired":"Please select Stream Generation",
    "applicationRequired":"Please select Application",
    "connectionRequired":"Please select Connections",
    "plannerRequired":"Please select Planner",
    "schemaActivateError":"The schema is not complete and not ready for validation",
    "passwordRequired":"Password required",
    "hostRequired":"Host required",
    "portRequired":"Port required",
    "protocolRequired":"Protocol required",
    "encodingRequired":"Encoding required",
    "smtpstimeoutRequired":"SMTPS Timeout required",
    "invalidLinkFieldError" : "Please select database field to link with schema field",
    "databaseConnectionError": "Database can't be connected so, fields can't be created"
};

_message = {
    "selectFileValidate" : "Выберать файл для проверки",
    "select": "Выбрать .... ",
    "save": "Сохранить",
    "error": "Ошибка",
    "commitChanges": "Вы должны сохранить или отменить изменения",
    "cancel": "Отмена",
    "schemasList": "Схемы списка",
    "add": "Добавить",
    "delete": "Удалить",
    "edit": "Редактировать",
    "logout": "Выход",
    "help": "Помогите",
    "ok":"Ok",
    "editFields": "Редактирование полей",
    "loadFields": "Загрузка полей",
    "duplicate": "Копировать",
    "validateDatastream": "Проверка Datastream",
    "validateDatastreamOfSchema": "Проверка Datastream схемы",
    "validateFile": "Проверка файлов",
    "close": "Закрыть",
    "scheme1":"Схема  1 ",
    "numeric":"Числовые",
    "alphanumeric":"Буквенно-цифровые",
    "decimal":"Десятичная",
    "uploadXSD":"Загрузить  XSD",
    "uploadFile":"Загрузить файл",
    "downloadFile":"Скачать файл",
    "validate":"Проверить",
    "loadmsg": "Загрузка",
    "invalid":"Неверная",
    "valid":"Действительно",
    "validateSchema":"Проверка схемы",
    "addRoot":"Добавить корень",
    "addBranch":"Добавить отрасль",
    "addLeaf":"Добавить лист",
    "addItem": "Добавить элемент",
    "all": "Все",
    "choice": "Выбор",
    "sequence": "Последовательность",
    "date": "Дата",
    "XSDdate": "XSD-Дата",
    "notOptional": "Не дополнительно",
    "optional": "Дополнительно",
    "disabled":"неработающий",
    "qualified": "Включен",
    "left": "левые",
    "right": "Право",
    "integer": "Целое",
    "hour": "Время",
    "dateAndTime": "Дата и время",
    "XSDhour": "XSD Время",
    "timestampUnix": "отметка времени",
    "XSDdateAndTime": "XSD Дата и время",
    "minLength": "Минимальная длина",
    "maxLength": "Максимальная длина",
    "sizeField": "Size field",
    "minInclusive": "Мин включено",
    "maxInclusive": "Макс включено",
    "type": "Тип",
    "decimalPlaces": "Число десятичных знаков",
    "format": "Формат",
    "upload": "Загрузить",
    "download": "Скачать",
    "loadTheFile": "Загрузка файла ...",
    "validTheFile": "Проверить файл ...",
    "alignment": "Выравнивание",
    "fillCharacter": "Заполнитель",
    "xsdUploadedSuccessfully": "XSD загружен успешно!",
    "xsdNotUploaded": "XSD не загружен!",
    "fileNotUploaded": "Файл не загружен",
    "fileUploaded": "Файл успешно загружен!",
    "result": "Результат:",
    "datastreamReceived": "Поток данных получен",
    "datastreamReceivedOfSchema": "Поток данных получен из схемы",
    "applicationHelpMessage": "Приложение контейнер информационных потоков <br/>главная особенность состоит в том, что данными приложениями потоков должны быть соблюдаемы соответствующие действия. <br/> В этом разделе вы можете добавлять, редактировать и удалять приложения в соответствии с данными вашего разрешения. ",
    "reportsHelpMessage": "Сформированные отчеты наглядно отображают состояние потоков данных и их эффективность с течением времени <br/> следующие два вида информацию можно получить: <br/>-действия и количества потоков данных, обрабатывается в реальном времени <br/>-действия потоков данных, относящихся к данной заявки на протяжении всего указанного месяца.",
    "databaseHelpMessage": "Профилирование базы данных означает создание возможности записи в базе данных для данного информационного потока <br/>в этом случае фиксируется не результат проверки, а общее количество элементов, составляющих информационный поток в пределах одной или нескольких таблиц, созданных брандмауэром <br/> заявление, не имеет ограничений базы данных;. Создание схемы <br/> схемы, также не могут быть связаны с какой-либо базой данных, это также означает, что информационный поток данных не будет записан. <br/> В этом последнем случае брандмауэр используется только для анализа и статистики целей, в то время как по отношению к соответствующей базе данных брандмауэра в основном используются для фильтрации и записи потока информации данных. <br/> поступления проверки данных и информационных потоков, остаются доступными для показа на 'Схемы-> Поток данных получил'.",
    "schemaHelpMessage": "Принципиальной особенностью предлагаемых систем заключается в возможности легко создавать структуру, которая называется моделью данных или схемы, которые определяют свойства составляющих их элементов <br/> информационного потока, следовательно, выполнены из набора данных, которые соответствует правилам указаным в схеме. <br/> В этом разделе вы можете изменить схему и все ее поля, проверка существующих схем, существующие правила проверки или создавать новые, не дублировать схему для создания Новой версии, а также просматривать результаты всех полученных информационных потоков и, в конечном счете, отправлять их обратно в систему.",
    "userHelpMessage": "Система обеспечивает доступ к различным функциям через позиции: <br/> - администратор <br/> - Диспетчер приложений (управляет всеми приложениями и схемами) <br/> - оператор (управляет только схемами) <br/> - диспетчер (отправка потоков в схемах) <br/> после регистрации пользователь должен обратится к администратору приложений или администратору системы для назначения роли<br/>",
    "connectionsHelpMessage" : "Чтобы получить доступ к внешней системе, чтобы получить поток данных из одного или нескольких файлов, вы должны ввести информацию доступа и  информацию файла для проверки присутствия.",
    "plannerHelpMessage" : "Планировщик позволяет запустить одну или несколько задач, когда это необходимо, не требуя ручного вмешательства.",
    "jobsHelpMessage" : "Работы позволяют подключение согласно веремени определённых в планировщике, берут требуемый файл и отправляют его в схемы.",
    "adminHelpMessage": "Брандмауэр предназначен для информационных потоков, поступающих из различных видов предоставляемых услуг <br/> Активация всех их позволяет клиенту воспользоваться лучшими услугами в своих целях <br/> Активация. только тех, которые  необходимы, означает значительный прирост производительности,  за те услуги, которые никогда не будут использованы. <br/> Отключение всех из них позволительно для проверки потоков данных только с помощью инструмента тестирования доступного с помощью 'Схемы->Проверка Потока данных'.",
    "version": "<strong>Версия </strong>",
    "credits": "<br/>&copy; Mario Altimari. Все права защищены.<br/>Более подробная информация на <a href='http://altimario.github.io/DataCruncher' target='_blank'>http://altimario.github.io/DataCruncher</a>",
    "refresh": "Обновить",
    "schemaValidationSuccess": "Успешная проверка схемы",
    "success" : "Успех",
    "fail" : "провал",
    "schemaDocuments": "Документы",
    "fieldNameNum": "Имя поля не должно начинаться с номера",
    "nameFieldInvalidFormate": "имя поля должно начинаться с символов [a..z] или  [A..Z] или  [_] ",
    "exportSchema": "Export as XSD",
    "importSchema": "Import XSD",
    "forgetPasswordMsg": "Вам будет выслано письмо с новым паролем",
    "captchaNotClear":"Не ясно Нажмите для нового просмотра",
    "successDuplicateSchema": "Схема успешно продублирована",
    "waitMessage": "Пожалуйста, подождите ...",
    "customErrors": "Custom message errors",
    "macro": "Макро",
    "exportPng": "Диаграмма Экспорт изображения",
    "optionNotReady" : "Function not yet available",
    "sendStream" : "Отправить поток",
    "noValuesForDisplay" : "Нет значений для отображения",
    "infoSharing": 'This schema validation will be shared with everyone on the site http://altimario.github.io/DataCruncher ,authorized in advance by the system administrator.<br/>Thanks for participating!',
    "del": "Delete",
    "delMsg": "Do you want to delete",
    "supportedStandard": "Supported standard",
    "addCode": "Add Code",
    "persistenceMsg": "<b>Information taken from persistence.xml</b>",
    "dbConfigError" : "You need to create an emtpy db. <br/><br/> Please edit the persistence.xml file.",
    "successSqlValidation" : "Валидация прошла успешно",
    "unsuccessSqlValidation" : "Валидация провалена",
    "errorTolerance" : "Error tolerance %",
    "test" : "Test",
    "generate" : "Generate",
    "deleteAll" : "Delete All",
    "deleteSelected" : "Delete Selected",
	"delRecursiveMsg": "This operation will delete recursively all schemas of",
	"sureMsg": ", are you sure?",
	"schemaCreateField": "Would you like to edit the schema fields?",
	"wizard": "Wizard",
    "forecasting" : "Forecasting"
};

_label = {
    "customCodeValidation":"Validazione Codice Custom",
    "triggerValidation":"Validazione Trigger",
    "startDate": "Дата начала",
    "endDate": "дата конец",
    "database": "База данных - Data sharing",
    "name": "Имя",
    "application": "Применение",
    "streamType": "тип схемы",
    "customValidation": "Custom stream validation",
    "databaseType": "Тип базы данных",
    "host": "хозяин",
    "port": "Порт",
    "databaseName": "Имя базы данных",
    "userName": "Имя пользователя",
    "password": "Пароль",
    "clearEditor":"Очистить редактор",
    "compile": "Компиляции",
    "expertMod": "Экспертный режим",
    "rule": "правило",
    "javaMetaCode": "Java Мета код",
    "trackFields": "путь полей",
    "dbTrackFields" : "Поля БД",
    "trackField": "путь поле",
    "instructions": "Инструкция",
    "applications": "Приложения - Stream container",
    "mainMenu": "Главное меню",
    "newValue":"Новое значение",
    "value":"Значение",
    "allowedValues":"Допускается значение",
    "schema":"схемы",
    "fieldDetail":"Поле подробно",
    "dateType":"тип даты",
    "timeType":"тип времени",
    "users": "Пользователи",
    "surname": "Фамилия",
    "email": "электронная почта",
    "email_config" : "Email config",
    "registrationDate": "Дата регистрации",
    "other": "Другие",
    "space": "Пространство",
    "date" : "Дата",
    "time": "Время",
    "checked": "Проверено",
    "regularExpression": "постоянное выражение",
    "extraCheck": "Дополнительные проверки",
    "description": "Описание",
    "link": "Ссылка",
    "loadDocuments": "Загрузка документов",
    "regExpStored": "постоянные выражения хранятся",
    "January": "Январь",
    "February": "Февраль",
    "March": "Март",
    "April": "Апрель",
    "May": "Май",
    "June": "Июнь",
    "July": "Июль",
    "August": "Август",
    "September": "Сентябрь",
    "October": "Октябрь",
    "November": "Ноябрь",
    "December": "Декабрь",
    "active": "Активный",
    "serverType": "Тип сервера",
    "server": "Сервер налицо" ,
    "scheduler" : "Планировщик",
    "schedulers" : "планировщики",
    "planner" : "Планировщик",
    "alert": "Предупреждение",
    "status" : "Статус",
    "every" : "Каждый",
    "tasks" : "Задачи",
    "minute" : "Минута",
    "hour" : "Часу",
    "day" : "День",
    "month" : "Месяц",
    "week" : "Неделя",
    "admin" : "Администрация",
    "connections" : "Соединения",
    "directory" : "Справочник",
    "fileName" : "Имя файла",
    "service" : "Сервис",
    "jobs" : "Иов",
    "forgetPassword" : "Забыли пароль",
    "register":"Зарегистрироваться",
    "login":"Логин",
    "dob":"Дата рождения",
    "securityCode":"Код безопасности",
    "role":"Роль",
    "min":"МЕНЬШЕ",
    "max":"БОЛЬШЕ",
    "equal":"РАВНО",
    "language":"Язык",
    "enabled":"Доступен",
    "disabled":"Недоступен",
    "version":"версия",
    "planned":"планируемый",
    "oneShoot":"один выстрел",
    "inputDatabase": "База данных для ввода",
    "outputDatabase": "Database for output",
    "storeDatabase": "База данных для хранения",
    "validationDatabase": "Database for validation",
    "contactUs":"Связаться с Нами",
    "send":"отправлять",
    "firstName":"первое имя",
    "lastName":"последнее имя",
    "emailAddress":"Ваш адрес электронной почты",
    "message":"сообщение",
    "info_service":"Info service",
    "streamLoggingOK":"OK",
    "streamLoggingKO":"Error",
    "streamLoggingWarning":"Warning",
    "downloadConnFile":"Test",
    "everyseconds":"Every Seconds",
    "generationStream":"Strem generation",
    "streamLoadingLabel":"Stream loading",
    "base" : "Основные параметры",
    "dataStream" : "Datastream",
    "streamLogging" : "Логгирование потока",
    "timeWindow" : "Окно планировщика",
    "forecasting" : "Прогнозирование",
    "indexing" : "Index",
    "global" : "Global",
    "noHeader" : "No Header",
    "delimiter" : "Разделитель",
    "available" : "Доступно",
    "speed" : "Скорость",
    "accuracy" : "Точность",
    "sentDataStream" : "Datastream to be sent",
    "importFile" : "Import File",
    "import" : "Import",
    "db_fields" : "Поля ДБ",
    "maxOccurs" : "maxOccurs",
    "unbounded" : "unbounded",
    "attributes": "Attributes",
    "attributeDetail": "Attribute detail",
    "companyName": "Company name",
    "companyWebsite": "Company website",
    "position": "Role",
    "authorize": "I authorize the use of my personal data.",
    "trimChar" : "Trim char:",
    "linkToDb" : "Поле БД",
    "standardValidations" : "Standard stream validation",
    "versionLibrary" : "Version Library",
    "queryGeneration" : "Генератор запросов",
    "resultSet" : "Результат",
    "realTime" : "Real Time",
    "monthlyState" : "Monthly State",
    "annualState" : "Annual State",
    "defaultDatabase" : "Default Database",
    "inputDir" : "Input directory",
    "serverPort" : "Server port",
    "outputDir" : "Output directory",
    "ftpConfig" : "FTP Config",
    "linked" : "Linked",
    "trigger" : "Trigger",
    "code":"Code",
    "cleareditor":"Clear editor",
    "validate":"Validate",
    "sendValidation" : "Send to validation",
    "modifyProfile" : "Modify Profile",
    "continue": "Continue",
    "editQuery" : "Редактировать запрос",
    "validateQuery" : "Валидация запроса",
    "saveQuery" : "Сохранить запрос",
    "deleteQuery" : "Удалить запрос",
    "connType":"Connection type",
    "deleteLinkToDb" : "Удалить связь с БД",
    "linkToDatabase" : "Соединить с БД",
    "linkToDbSelected" : "DB field selected",
    "monthYear" : "Month of the Year",
    "dayMonth" : "Days of the month",
    "monthStGraph" : "Monthly State Graph",
    "annualStGraph" : "Annual State Graph",
    "realTimeData" : "Real Time Data Load",
    "numDataStream" : "Numbers of Data Stream",
    "currentTimeValidation" : "Current Time",
    "bar" : "Bar",
    "relevance" : "Приоритет",
    "warnTolerance" : "Устойчивость к Warning",
    "emailSettings" : "Email settings",
    "protocol" : "Protocol",
    "encoding" : "Encoding",
    "smtpsTimeout" : "SMTPS TIMEOUT",
    "startttls" : "STARTTLS",
    "smtpsAuthenticate" : "SMTPS AUTHENTICATE",
    "ftp" : "FTP",
    "detailedState" : "Detailed State",
    "detailedStGraph" : "Detailed chart in Real Time",
    "dataStreamTitle" : "Data Stream",
    "schemas" : "Schemas",
    "datastreams" : "Datastreams",
    "log" : "Log",
    "id" : "Id",
    "dbInfo" : "DataBase Info",
    "dataQuality" : "Data Quality (Beta)",
    "websiteAllPage" : "Website URL - all pages",
    "websiteSinglePage" : "Website URL - single page",
    "streamManagement" : "Stream Management",
    "search_desc" : "Search in description",
    "matching_recs" : "Matching records",
    "selectApplications" : "Select Applications",
    "noSqlLog" : "NoSQL Log",
    "mongoDB" : "MongoDB"
};

_button = {
    "IF": "ЕСЛИ",
    "ENDIF": "Конец ЕСЛИ",
    "THEN": "ТОГДА",
    "AND": "И",
    "OR": "ИЛИ",
    "DIFFERENT": "РАЗЛИЧНЫЕ",
    "EQUAL": "РАВНЫЕ",
    "EMPTY": "Пустой",
    "VALUE": "ЗНАЧЕНИЕ",
    "STRING": "String",
    "ERROR": "ОШИБКА",
    "INSERT" : "Вставить",
    "ADD" : "Добавить"
};

_streamType = {
    "XML": "XML",
    "XMLEXI": "XML EXI",
    "flatFileFixedPosition": "Flat File Fixed Position",
    "flatFileDelimited": "Flat File Delimited",
    "JSON": "JSON",
    "EXCEL": "MS Excel",
	"HL7" : "HL7",
	"SWIFT" : "SWIFT",
	"EDI_CICA" : "EDI CICA"
};
_eventStatus = {
		"KO":"Error",
		"OK":"Ok",
		"Warning":"Warning"
};
_serviceType = {
    "FTP": "FTP",
    "SAMBAWIN": "Samba / Win",
    "HTTP": "HTTP"
};
_status = {
		"info": "Info",
		"error": "Error",
		"warning": "Warning"
};
_months = {
    "1": "Январь",
    "2": "Февраль",
    "3": "Март",
    "4": "Апрель",
    "5": "Май",
    "6": "Июнь",
    "7": "Июль",
    "8": "Август",
    "9": "Сентябрь",
    "10": "Октябрь",
    "11": "Ноябрь",
    "12": "Декабрь"
};

_weekDays = {
    "1": "Воскресенье",
    "2": "Понедельник",
    "3": "Вторник",
    "4": "Среда",
    "5": "Четверг",
    "6": "Пятница",
    "7": "Суббота"
};

_role = {
    "admin": "Администратор",
    "appManager": "Менеджер приложения",
    "operator": "Оператор",
    "dispatcher": "Диспетчер",
    "user": "Пользователь"
};

_language = {
    "english": "Английский",
    "italian": "Итальянский",
    "german" : "Немецкий",
    "russian": "Русский"
};

_alert_ee = {

},

    _error_ee = {
        "schemaLoadFieldsError": "Эта схема не может иметь макрос"
    },

    _message_ee = {
        "addMacro": "Добавить  макрос",
        "macroCorrectly":"Макрос завершен корректно",
        "macroIncorrectly":"Макрос Ошибка проверки",
        "macroEditing":"Макрос редактирования"
    },

    _label_ee = {
        "macroCompilation": "Макро сборник"
    };

