# Kitap Kurdu

Bu proje, **React Router DOM** kullanılarak geliştirilmiş bir online kitap mağazasını içermektedir. Proje, React Router DOM'un temel özelliklerini anlamak ve kullanmak için geliştirilmiştir. Aşağıda projede kullanılan bazı önemli özelliklere ve bileşenlere dair bilgiler yer almaktadır:

## Özellikler

### 1. React Router DOM Kullanımı
   - `BrowserRouter` component'i, tarayıcıdaki URL'ye göre sayfalama sağlar.
   - `Routes` ve `Route` component'leri, farklı sayfaların ve yolların tanımlanmasını sağlar.

### 2. Dinamik Sayfalama
   - `/:id` şeklindeki dinamik yol tanımlarıyla, ürün detayları gibi dinamik içeriklerin yönetimi mümkündür. Örneğin, `/ürün/123` URL'iyle erişilen sayfa, 123 numaralı ürünün detaylarını gösterir.

### 3. İç İçe Yollar (Nested Routes)
   - `CategoryPage` içindeki farklı kategorilere ait iç içe geçmiş yollar ile karmaşık sayfa yapıları oluşturulabilir. Örneğin, `/kategori/hikaye`, `/kategori/roman`, gibi iç içe geçmiş kategorilere ait sayfalar yönetilebilir.

### 4. Ortak Bileşenler
   - `Header` ve `Footer` component'leri, bütün sayfalar arasında ortak olarak kullanılır. Bu sayede proje genelinde tutarlı bir tasarım sağlanır.

### 5. 404 Sayfası
   - Tanımlanmayan bir yol girildiğinde kullanıcıyı karşılayan özel bir 404 sayfası (`NotFound`) bulunmaktadır.

## Kullanılan Teknolojiler ve Harici Kütüphaneler
* React.js
* React-Router-DOM
* JSON-Server
* Axios
* Bootstrap

## Ekran Gifi

![books](https://github.com/aydincansu1/ReactRouterDOM-Bookstore/assets/134061696/8426da2a-0f15-4868-8c78-73c90a680293)
