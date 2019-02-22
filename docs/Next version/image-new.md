# Элемент image  
Изображение, используется как отдельно так и в составе сложных элементов.

**styled-system Универсальные пропсы**
- p
- pt
- pr
- pb
- pl
- px
- py
- m
- mt
- mr
- mb
- ml
- mx
- my
- display
- width
- height
- justifySelf
- alignSelf
- border
   - borderSize
   - borderTop
   - borderRight
   - borderBottom
   - borderLeft
   - borderRadius
   - borderColor
- opacity
- position
   - top
   - right
   - bottom
   - left
- zIndex
- href
- targetBlank
- title
- id

**styled-system Персональные пропсы**
- ratio

- alt - альтернативный текст, когда изображение не загрузилось. Принимает строку



-----

Универсальные пропсы:
- link
- href
- targetBlank
- title
- paddingHorizontal
- vAlign
- showOnDevices
- height
- positionFixed
- positionAbsolute
- zIndex
- width
- opacity
- rotation
- id

Персональные пропсы:
- innerBorderSize - размер внутренней рамки на изображении. Принимает цифру

- innerBorderColor - цвет внутренней рамки на изображении. Принимает строку с цветом

- borderRadius - радиус скругления углов. Принимает цифру.

- fit — как вписывается изображение в контейнер. Принимает contain (изображение вписывается в контейнер и не обрезается, но остаются пустые места object-fit:сontain ) / cover (изображение заполняет контейнер, но обрезается object-fit:cover) / none (изображение остается реальным размером object-fit:none).

- scale - диапазон для масштабирования изображения. Принимает цифру из диапазона (Посмотреть где это было и как работает)

- aspectRatio - соотношение сторон контейнера с изображением. Принимает одно из заданных значений

- hFlip - отобразить по горизонтали. Свитчер

- vFlip - отобразить по вертикали. Свитчер

- lightbox - при клике показывать полный размер на овелее с кнопкой-крестиком. Свитчер

- centerPoint - Позиция центральной точки на изображении, которая будет по центру контейнера, в случае если контейнер меньше изображения. Принимает одно из заданных значений (left top, center top, right top, left center, center center, right center, right bottom, center bottom, right bottom) css свойство object-position

- alt - альтернативный текст, когда изображение не загрузилось. Принимает строку