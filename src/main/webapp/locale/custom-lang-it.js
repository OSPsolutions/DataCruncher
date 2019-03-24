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
    "selectRecord": "Devi selezionare un record!",
    "createAppDB": "Devi prima creare un applicazione ed un database!",
    "createApp": "E' necessario creare un'applicazione.",
    "editNotPermitted": "Non &egrave; possibile editare i campi di questo tracciato!",
    "loadNotPermittedStep1": "Questa funzionalit&agrave; non &egrave; permessa per questo tipo di tracciato!",
    "loadNotPermittedStep2": "Questa funzionalit&agrave; non &egrave; permessa in quanto sono presenti campi nel tracciato!",
    "loadNotPermittedStep3": "Questa funzionalit&agrave; non &egrave; permessa per questo tipo di tracciato. Selezionare uno schema di tipo XML o XMLEXI",
    "fillFields": "Compilare tutti i campi",
    "errorSelectRecord": "Errore. Seleziona un record",
    "nameFieldRequired": "Il campo nome &egrave; obbligatorio",
    "saveOrCancelChanges": "Devi salvare o annullare le modifiche",
    "errorXsdExport": "XSD non esportabile",
    "updateRecord": "Record modificato con successo",
    "insertTrace": "Inserire un tracciato da validare",
    "minlengthFieldRequired": "Il campo 'lunghezza minima' &grave; necessario",
    "maxlengthFieldRequired": "Il campo 'lunghezza massima' &grave; necessario",
    "sizeFieldRequired":"Il campo 'dimensione' &grave; necessario",
    "invalidMinLengthField":"Il valore del campo 'minimo' deve essere superiore a zero",
    "invalidMinCompareValue":"Il valore del campo 'minimo' deve essere inferiore o uguale al valore massimo",
    "invalidMaxLengthField":"Il valore del campo 'massimo' deve essere maggiore o uguale al valore massimo",
    "invalidMaxCompareValue":"Il valore del campo 'massimo' deve essere inferiore al valore del campo 'dimensioni'",
    "minInclusiveFieldRequired": "Il campo 'minimo' &egrave; necessario",
    "maxInclusiveFieldRequired": "Il campo 'massimo' &egrave; necessario",
    "invalidMinInclusiveField":"Il valore del campo 'minimo' deve essere superiore a zero",
    "invalidMinInclusiveCompareValue":"Il valore del campo 'minimo' deve essere inferiore al valore del campo 'massimo'",
    "invalidMaxInclusiveCompareValue":"Il valore del campo 'massimo' deve essere superiore al valore del campo 'minimo'",
    "invalidMaxInclusiveSizeValue":"Il valore del campo 'massimo' deve essere inferiore della dimensione del valore del campo", //rivedere la traduzione
    "addRecord": "Record inserito con successo",
    "noStreamData": "Il flusso dati non pu&ograve; essere salvato: nessun dato presente",
    "chooseTree": "Scegliare un nodo della struttura superiore",
    "fieldWithoutDbLink" : "Selezionare un nodo che ha un collegamento con un data base",
    "serverDown" : "Spiacente, il server non &egrave; momentaneamente disponibile. Contattare l'amministratore di sistema.",
    "schemaWithoutLinkedToDbFields" : "Lo schema corrente deve avere almeno un campo linkato al db.",
    "sqlDeleted" : "Query Sql cancellata dal db",
    "sqlSaved" : "Query Sql salvata del db",
    "selectDBRecord" : "Please select a record from list of database record"
};

_error = {
	"connectionError": "Errore di connessione al server",
	"invalidFileExtError":"Selezionare un file XSD",
	"invalidXSDFileError":"Errore nel parsing del file XSD. Selezionare un XSD valido",
	"invalidCredentials":"Nome Utente o Password non validi",
	"invalidCaptcha":"Captcha non valido",
	"nameExistError":"Nome gi&agrave; esistente",
	"userNotEnabled":"Utente non abilitato",
	"userNameRequired":"Nome Utente richiesto",
	"emailRequired":"Email richiesto",
	"noRecordFound":"Nessun record trovato",
	"stringEmptyError":"Inserisci il valore stringa",
	"valueEmptyError":"Inserisci il valore numerico",
	"errorEmptyError":"Inserisci il messaggio di errore",
	"dateEmptyError":"Inserisci una data",
	"decimalValueError":"Inserisci un valido valore decimale",
	"plannedNameError":"Selezionare il nome previsto",
	"shootDateError":"Selezionare il campo: 'una sola volta'",
	"shootTimeError":"Editare il campo: 'una sola volta'",
	"delimiterEmptyError":"Inserisci il delimitatore",
	"schemaEmptyFieldError":"Questo schema non ha campi",
	"minuteSelectError":"Si prega di selezionare i minuti",
	"hourSelectError":"Si prega di selezionare l'ora",
	"daySelectError":"Si prega di selezionare il giorno",
	"monthSelectError":"Si prega di selezionare il mese",
	"weekSelectError":"Seleziona la settimana",
	"dateSelectError":"Si prega di selezionare la data",
	"timeError":"Inserisci il valore del tempo",
	"databaseInputError":"Si prega di selezionare il database per i dati di input",
	"databaseStoreError":"Si prega di selezionare il database per i dati di output",
	"invalidTimeFormatError":"Formato tempo non valido. Inserire l'ora nel formato hh:mm",
	"serviceDisabledError":"Servizio disabilitato, non puoi scaricare il file",
    "everySecondError":"Il valore 'ogni secondo' deve essere maggiore di 0",
    "fileDownloadError":"File non esistente e non pu&ograve; essere scaricato",
    "invalidImportFileExtError":"Per favore selezionare il file .jv",
	"descFieldRequired": "Il campo 'Lunghezza miinima' &egrave; richiesto",
	"regExpFieldRequired": "Il campo 'Espressione Regolare' &egrave; richiesto",
	"recordEditError": "Il record selezionato non pu&ograve; essere editato",
	"recordDeleteError": "Il record selezionato non pu&ograve; essere cancellato",
	"trimcharEmptyError":"Please enter trim character value",
	"streamValidationRequired":"Selezionare Validazione flusso dati custom",
	"streamGenerationRequired":"Selezionare Generazione flusso dati",
	"applicationRequired":"Selezionare Applicazione",
	"connectionRequired":"Selezionare Connessioni",
	"plannerRequired":"Selezionare Pianificatore",
	"schemaActivateError":"Lo schema non &egrave; completo e quindi non pronto per  la validazione",
	"passwordRequired":"Password richiesta",
	"hostRequired":"Host richiesto",
	"portRequired":"Port richiesta",
	"protocolRequired":"Protocol richiesto",
	"encodingRequired":"Encoding richiesto",
	"smtpstimeoutRequired":"SMTPS Timeout richiesto",
    "invalidLinkFieldError" : "Please select database field to link with schema field",
    "databaseConnectionError": "Il database non &egrave; connesso e i campi non possono essere creati"
};

_message = {
	"selectFileValidate" : "Seleziona il file da validare",
	"select": "Seleziona .... ",
    "save": "Salva",
    "error": "Errore",
    "commitChanges": "Devi salvare o annullare le modifiche",
    "cancel": "Annulla",
    "schemasList": "Lista schemi",
    "add": "Aggiungi",
    "delete": "Cancella",
    "edit": "Modifica",
    "logout": "Logout",
    "help":"Aiuto",
    "ok":"Ok",
    "editFields": "Edita campi tracciato",
    "loadFields": "Carica campi tracciato",
    "duplicate": "Duplica",
    "validateDatastream": "Valida flusso",
    "validateDatastreamOfSchema": "Convalidare il flusso del tracciato",
    "validateFile": "Valida file",
    "close": "Chiudi",
    "scheme1": "Schema 1",
    "numeric": "Numerico",
    "alphanumeric": "Alfanumerico",
    "decimal": "Decimale",
    "uploadXSD": "Carica XSD",
    "uploadFile":"Carica file",
    "downloadFile":"Scarica File",
    "validate": "Valida",
    "loadmsg": "Carico",
    "invalid": "Non valido",
    "valid": "Valido",
    "validateSchema":"Valida tracciato",
    "addRoot": "Aggiungi root",
    "addBranch": "Aggiungi ramo",
    "addLeaf": "Aggiungi foglia",
    "addItem": "Aggiungi elemento",
    "all": "All",
    "choice": "Choice",
    "sequence": "Sequence",
    "date": "Data",
    "XSDdate": "XSD Data",
    "notOptional": "Non opzionale",
    "optional": "Opzionale",
    "disabled": "Disabilitato",
    "qualified": "Abilitato",
    "left": "Sinistra",
    "right": "Destra",
    "integer": "Intero",
    "hour": "Ora",
    "XSDhour": "XSD Ora",
    "timestampUnix": "timestamp unix",
    "dateAndTime": "Data ed ora",
    "XSDdateAndTime": "XSD Data ed ora",
    "minLength": "Lunghezza Min",
    "maxLength": "Lunghezza Max",
    "sizeField": "Dim. campo",
    "minInclusive": "Valore minimo",
    "maxInclusive": "Valore massimo",
    "type": "Tipo",
    "decimalPlaces": "Cifre decimali",
    "format": "Formato",
    "upload": "Carica",
    "download":"Scarica",
    "alignment": "Allineamento",
    "fillCharacter": "Carattere riempimento",
    "loadTheFile": "Carico il file...",
    "validTheFile":"Valido il file...",
    "xsdUploadedSuccessfully": "XSD caricato con successo!",
    "xsdNotUploaded": "XSD non caricato!",
    "fileNotUploaded":"File non caricato!",
    "fileUploaded":"File caricato con successo !",
    "result": "Esito :",
    "datastreamReceived": "Flussi ricevuti",
    "datastreamReceivedOfSchema": "Flussi ricevuti del tracciato ",
	"applicationHelpMessage": "Un'applicazione &egrave; un contenitore di flussi informativi.<br/>La caratteristica principale &egrave; che i flussi informativi dell'applicazione, devono rispettare le date di validit&agrave;.<br/>In questa sezione &egrave; possibile aggiungere, modificare e cancellare le varie applicazioni compatibilmente con i propri permessi.",
    "reportsHelpMessage": "I report visualizzano graficamente lo stato dei flussi informativi e l'andamento nel tempo. Le informazioni che si possono ricavare sono: <br/>- validit&agrave; e numero di flussi informativi elaborati in tempo reale <br/>- validit&agrave; dei flussi informativi di una determinata applicazione, nell'arco di un mese specifico.",
    "databaseHelpMessage": "Censire un Database significa dare la possibilit&agrave; ai dati di un flusso informativo di essere storicizzati all'interno di un Database. Quello che viene storicizzato in questo caso non &egrave; il risultato della validazione, ma &grave; l'insieme dei vari elementi che compongono il flusso informativo all'interno di una o pi&ugrave tabelle create, dinamicamente, dal firewall. Un'applicazione non ha vincoli legati al Database, ma lo schema si. Uno schema pu&ograve; comunque non essere associato ad alcun Database, questo per&ograve; significa che i dati del flusso informativo non vengono storicizzati. In questo ultimo caso il firewall &egrave; utilizzato solo per scopi di analisi e statistica, mentre nel caso di un Database associato il firewall &egrave; utilizzato anche e soprattutto per filtrare e storicizzare i dati che compongono il flusso informativo. I dati di validit&agrave; e i flussi informativi ricevuti restano in ogni caso sempre fruibili per la visualizzazione su 'Tracciati->Flussi ricevuti'.",
    "schemaHelpMessage": "Una caratteristica fondamentale del sistema &egrave; rappresentata dalla possibilit&agrave; di creare facilmente una struttura, chiamata tracciato o schema, che definisce le propriet&agrave; degli elementi che la compongono.<br/>Il flusso informativo &egrave; quindi composto da un insieme di dati che rispondono alle regole del tracciato.<br/>In questa sezione &egrave; possibile editare il tracciato e tutti i campi che lo compongono, testare i tracciati creati, associare regole di validazione esistenti o crearne di nuove, duplicare un tracciato per crearne una nuova versione, nonch&egrave; visualizzare gli esiti di tutti i flussi informativi ricevuti ed, eventualmente, rispedirli al sistema.",
    "userHelpMessage": "Il sistema permette l'accesso alle varie funzionalit&agrave; attraverso i ruoli:<br/>- administrator<br/>- applications manager (gestisce tutte le applicazioni di propria competenza e i tracciati inerenti)<br/>- operator (gestisce i tracciati di propria competenza)<br/>- dispatcher (invia i flussi nei tracciati di propria competenza)<br/>Un utente dopo essersi registrato, deve aspettare che il gestore dell'applicazione o l'amministratore del sistema lo abiliti e gli assegni il ruolo definito.<br/>",
    "connectionsHelpMessage" : "Per accedere a un sistema esterno per prelevare i flussi contenuti in uno o pi&ugrave; file, bisogna inserire i dati di accesso al server e al file e verificarne la disponibilit&agrave;.",
    "plannerHelpMessage" : "Il pianificatore permette l'avvio di uno o pi&ugrave; incarichi ogni volta che &egrave; necessario, senza necessit&agrave; di intervenire manualmente.",
    "jobsHelpMessage" : "L'incarico attiva la connessione secondo i tempi decisi nel pianificatore, preleva il file richiesto e lo invia al tracciato di riferimento.",
    "adminHelpMessage": "Il firewall rimane in ascolto dei flussi informativi in arrivo per le varie tipologie di servizi disponibili. Attivarli tutti significa dare la possibilit&agrave;, ad un client, di usufruire del servizio pi&ugrave; opportuno per i propri scopi. Attivare solo quelli di interesse significa non perdere performance restando in ascolto di servizi che si sa non verrano mai utilizzati. Disattivarli tutti significa poter validare i flussi informativi solo attraverso lo strumento di test che &egrave; 'Tracciati->Valida tracciati'.",
    "version": "<strong>Versione </strong>",
    "credits": "<br/>&copy; Mario Altimari. Tutti i diritti riservati.<br/>Ulteriori informazioni su <a href='http://altimario.github.io/DataCruncher' target='_blank'>http://altimario.github.io/DataCruncher</a>",
    "schemaValidationSuccess": "Tracciato validato con successo",
    "success" : "successo",
    "fail" : "fallo",
    "refresh": "Aggiorna",
    "schemaDocuments": "Documenti",
    "fieldNameNum": "Il nome del campo non pu&ograve; iniziare con un numero",
    "nameFieldInvalidFormate": "Il nome campo deve iniziare con i caratteri [a..Z] o [A..Z] o [_] ",
    "exportSchema": "Esportazione come XSD",
    "importSchema": "Importazione XSD",
    "forgetPasswordMsg": "Verr&agrave; spedita una email con la nuova password.",
    "captchaNotClear":"Immagine poco chiara? Clicca per una nuova.",
    "successDuplicateSchema": "Schema duplicato con successo",
    "waitMessage": "Attendere prego...",
	"customErrors": "Messaggi d'errore personalizzati",
    "macro": "Macro",
    "exportPng": "Esportazione Immagine XSD",
	"optionNotReady" : "Funzione non ancora disponibile",
	"sendStream" : "Invia flusso",
	"noValuesForDisplay" : "Nessun dato da visualizzare",
    "infoSharing": 'Questo schema di validazione verr&agrave; condiviso con tutti sul sito http://altimario.github.io/DataCruncher ,previa autorizzazione da parte dell\'amministratore di sistema.<br/>Grazie per la partecipazione!' ,
    "del": "Cancellare",
    "delMsg": "Vuoi eliminare",
    "supportedStandard": "Standard supportati",
    "addCode": "Add Code",
    "persistenceMsg": "<b>Informazioni rilevate da persistence.xml</b>",
    "dbConfigError" : "Devi creare un database vuoto.<br/><br/>Modifica il file persistence.xml",
    "clearEditor":"Ripulisci l'editor",
    "errorTolerance" : "% di tolleranza all'errore",
    "test" : "Test",
    "generate" : "Genera",
    "deleteAll" : "Cancella tutto",
    "deleteSelected" : "Delete Selected",
	"delRecursiveMsg": "Questa operazione canceller&agrave; ricorsivamente tutti gli schemi di",
	"sureMsg": ", sei sicuro?",
	"schemaCreateField": "Would you like to edit the schema fields?",
	"wizard": "Wizard",
    "forecasting" : "Previsione"
};

_label = {
	"customCodeValidation":"Validazione Codice Custom",
	"triggerValidation":"Validazione Trigger",
	"startDate": "Data inizio",
    "endDate": "Data fine",
    "database": "Database - Condivisione dati ",
    "name": "Nome",
    "application": "Applicazione",
    "streamType": "Tipo tracciato",
    "customValidation": "Validazione flusso dati custom",
    "databaseType": "Tipo Database",
    "host": "Indirizzo",
    "port": "Porta",
    "databaseName": "Nome Database",
    "userName": "Nome Utente",
    "password": "Password",
    "clearEditor":"Pulisci editor",
    "compile": "Compila",
    "expertMod": "Modalit&agrave; esperto",
    "rule": "Regola",
    "javaMetaCode": "Java Meta Codice",
    "trackFields": "Campi tracciato",
    "dbTrackFields" : "Campi del DB",
    "trackField": "Campo tracciato",
    "instructions": "Istruzioni",
    "applications": "Applicazioni - Contenitore di flussi",
    "mainMenu": "Menu principale",
    "newValue": "Nuovo valore",
    "value": "Valore",
    "allowedValues": "Valori ammessi",
    "schema": "Tracciato",
    "fieldDetail": "Dettaglio campo",
    "dateType": "Tipo data",
    "timeType": "Tipo ora",
    "users": "Utenti",
    "surname": "Cognome",
    "email": "Email",
    "email_config" : "Email config",
    "registrationDate": "Data registrazione",
    "other": "Altro",
    "space": "Spazio",
    "date" : "Data",
    "time": "Tempo",
    "checked": "Checked",
    "regularExpression": "Espressione regolare",
    "extraCheck": "Controlli extra",
    "description": "Descrizione",
    "link": "Link",
    "January": "Gennaio",
    "February": "Febbraio",
    "March": "Marzo",
    "April": "Aprile",
    "May": "Maggio",
    "June": "Giugno",
    "July": "Luglio",
    "August": "Agosto",
    "September": "Settembre",
    "October": "Ottobre",
    "November": "Novembre",
    "December": "Dicembre",
    "loadDocuments": "Carica documenti tracciato",
    "regExpStored": "Regular Expression memorizzati",
    "active": "Attivo",
    "serverType": "Server di tipo",
    "server": "Server disponibili",
    "scheduler" : "Schedulatore",
    "schedulers" : "Schedulatori",
    "planner" : "Pianificatore",
    "alert": "Alert",
    "status" : "Stato",
    "every" : "Ogni",
    "tasks" : "Compito",
    "minute" : "Minuto",
    "hour" : "Ora",
    "day" : "Giorno",
    "month" : "Mese",
    "week" : "Settimana",
    "admin" : "Amministrazione",
    "connections" : "Connessioni",
    "directory" : "Directory",
	"fileName" : "Nome del file",
	"service" : "Servizio",
	"jobs" : "Incarichi",
	"forgetPassword" : "Password dimenticata",
	"register":"Registrati",
	"login":"Accesso",
	"dob":"Data di nascita",
	"securityCode":"Codice di sicurezza",
	"role":"Ruolo",
    "min":"MINORE",
    "max":"MAGGIORE",
    "equal":"UGUALE",
    "language":"Lingua",
    "enabled":"Abilitato",
    "disabled":"Disabilitato",
    "version":"Versione",
    "planned":"Pianificata",
    "oneShoot":"Una sola volta",
	"inputDatabase": "DB in Input",
    "outputDatabase": "Database per Output",
	"storeDatabase": "DB in Output",
    "validationDatabase": "DB per Validazione",
	"contactUs":"Contattaci",
	"send":"Invia",
	"firstName":"Nome",
	"lastName":"Cognome",
	"emailAddress":"Il tuo indirizzo email",
	"message":"messaggio",
    "info_service":"Info servizio",
	"streamLoggingOK":"OK",
	"streamLoggingKO":"Error",
	"streamLoggingWarning":"Warning",
    "downloadConnFile":"Test",
    "everyseconds":"Ogni secondo",
    "generationStream":"Generazione flusso dati",
    "streamLoadingLabel":"Stream loading",
    "base" : "Base",
    "dataStream" : "Datastream",
    "streamLogging" : "Stream logging",
    "timeWindow" : "Finestra Temporale",
    "forecasting" : "Previsione",
    "indexing" : "Indice",
    "global" : "Globale",
    "noHeader" : "No Header",
    "delimiter" : "Delimitatore",
    "available" : "Disponibile",
    "speed" : "Velocit&agrave;",
    "accuracy" : "Precisione",
    "sentDataStream" : "Datastream da inviare",
    "importFile" : "Importa file",
    "import" : "Importa",
    "db_fields" : "Campi Database",
    "maxOccurs" : "maxOccurs",
    "unbounded" : "illimitato",
    "attributes": "Attributi",
    "attributeDetail": "Dettaglio attributi",
    "companyName": "Azienda",
    "companyWebsite": "Sito Aziendale",
    "position": "Posizione",
    "authorize": "Autorizzo l'uso dei miei dati personali.",
    "trimChar" : "Trim char:",
    "linkToDb" : "Campi DB",
    "standardValidations" : "Validazione flusso dati standard",
    "versionLibrary" : "Version Library",
    "queryGeneration" : "Generazione Query",
    "resultSet" : "Result set",
    "realTime" : "Tempo Reale",
    "monthlyState" : "Stato mensile",
    "annualState" : "Stato annuale",
    "defaultDatabase" : "Default Database",
    "inputDir" : "Input directory",
    "serverPort" : "Server port",
    "outputDir" : "Output directory",
    "ftpConfig" : "FTP Config",
	"linked" : "Agganciato",
    "trigger" : "Trigger",
    "code":"Codice",
    "cleareditor":"Pulisci editor",
	"validate":"Validate" ,
    "sendValidation" : "Invia al validatore",
	"modifyProfile" : "Modifica profilo",
    "continue": "Continua",
    "editQuery" : "Edit query",
    "deleteLinkToDb" : "Cancella il link al database",
    "linkToDatabase" : "Link to database",
    "linkToDbSelected" : "Campi del DB selzionati",
    "monthYear" : "Mesi dell'anno",
    "dayMonth" : "Giorni del mese",
    "monthStGraph" : "Grafico mensile",
    "annualStGraph" : "Grafico annuale",
    "realTimeData" : "Real Time Data Load",
    "currentTimeValidation" : "Ora attuale",
    "bar" : "Bar",
    "relevance" : "Rilevanza",
    "warnTolerance" : "Tolleranza Warning",
    "emailSettings" : "Configurazione Email",
    "protocol" : "Protocol",
    "encoding" : "Encoding",
    "smtpsTimeout" : "SMTPS TIMEOUT",
    "startttls" : "STARTTLS",
    "smtpsAuthenticate" : "SMTPS AUTHENTICATE",
    "ftp" : "FTP",
    "detailedState" : "Stato dettagliato",
    "detailedStGraph" : "Grafico in Real Time dettagliato",
    "schemas" : "Tracciati",
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
	    "IF": "SE",
        "THEN": "ALLORA",
	    "ENDIF": "FINE SE",
	    "AND": "E",
        "OR": "OPPURE",
        "DIFFERENT": "Diverso",
        "EQUAL": "Uguale",
        "EMPTY": "Vuoto",
        "VALUE": "Valore",
        "STRING": "Stringa",
        "ERROR": "Errore",
        "INSERT" : "INSERT",
        "ADD" : "ADD"
};

_streamType = {
	    "XML": "XML",
	    "XMLEXI": "XML EXI",
	    "flatFileFixedPosition": "TXT a lunghezza fissa",
	    "flatFileDelimited": "TXT con delimitatore",
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
    "1": "Gennaio",
    "2": "Febbraio",
    "3": "Marzo",
    "4": "Aprile",
    "5": "Maggio",
    "6": "Giugno",
    "7": "Luglio",
    "8": "Agosto",
    "9": "Settembre",
    "10": "Ottobre",
    "11": "Novembre",
    "12": "Dicembre"
};

_weekDays = {
	"1" : "Domenica",
	"2" : "Lunedi",
	"3" : "Martedi",
	"4" : "Mercoledi",
	"5" : "Giovedi",
	"6" : "Venerdi",
	"7" : "Sabato"
};
_role = {
	"admin": "Amministratore",
	"appManager": "Gestore Applicazioni",
	"operator": "Operatore",
	"dispatcher": "Spedizioniere",
	"user": "Utente"
};
_language = {
	"english": "Inglese",
	"italian": "Italiano",
    "german" : "Tedesco",
    "russian": "Russo"
};

_alert_ee = {

},

    _error_ee = {
        "schemaLoadFieldsError":"Questo schema non pu&ograve; avere una macro"
    },

    _message_ee = {
        "addMacro": "Aggiungi macro",
        "macroCorrectly": "Macro compilata correttamente",
        "macroIncorrectly":"Validazione Macro fallita",
        "macroEditing": "Modifica macro"
    },

    _label_ee = {
        "macroCompilation": "Compilazione macro"
    };


