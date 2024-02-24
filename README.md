### Simple Server

<hr>
<div>
<strong>Сервер был создан по видео канала</strong>
<a href="https://www.youtube.com/watch?v=4PbCVaNsbcU">
SIBERIA CAN CODE 🧊 - Frontend</a>
</div>
<br>
<div>
Для запуска откройте терминал и напишите:
</div>
<br>

```dart
node .
```

или


```dart
node index.js
```


Сервер откроется на порту <a href="http://localhost:3001/">http://localhost:3001/</a>

Для смены порта, измените значени переменной post

<br>

### Для тех, кто смотрит следующее видео:

Сервер был переделан, теперь необходимо указывать ваш url локального сервера frontend приложения, что бы вас пропустил CORS.

Пример:

```dart
server.use(cors({credentials: true, origin: 'http://localhost:5173'}));
```

Меняете на:

```dart
server.use(cors({credentials: true, origin: 'Ваш url'}));
```

