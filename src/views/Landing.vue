<template>
  <div class="food-assist">
    <div class="food-assist__inner">
      <v-row v-if="windowWidth > 1024" class="mx-0 food-assist__header">
        <ul class="food-assist__header-menu">
          <li v-scroll-to="'#main'">
            <a @click="step = 1" :class="{ active: step === 1 }">Главная</a>
          </li>
          <li v-scroll-to="'#advantage'">
            <a @click="step = 2" :class="{ active: step === 2 }"
              >Преимущества
            </a>
          </li>
          <li v-scroll-to="'#price'">
            <a @click="step = 3" :class="{ active: step === 3 }">Цены</a>
          </li>
          <li v-scroll-to="'#contacts'">
            <a @click="step = 4" :class="{ active: step === 4 }">Контакты</a>
          </li>
        </ul>
        <v-btn
          class="food-assist__header-btn"
          color="#FFA726"
          dark
          rounded
          :height="windowWidth > 1499 ? 48 : 35"
          @click="simpleModal = true"
        >
          Позвоните мне
        </v-btn>
      </v-row>
      <perfect-scrollbar class="food-assist__content" id="container">
        <!--step 1-->
        <v-row class="align-center flex-wrap food-assist__section" id="main">
          <v-col cols="12" sm="6" md="6" lg="5" class="left-part">
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-option">
                Мобильное приложение в АРЕНДУ для
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-title">
                Кафе и ресторанов
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-text">
                Food Assistant помогает быстро создать мобильное приложение для
                Вашего кафе, ресторана или столовой. Всего за 2 недели и от 7
                625. Руб.в месяц
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-btn">
                <v-btn
                  rounded
                  dark
                  color="#FFA726"
                  :height="windowWidth > 1499 ? 58 : 35"
                  @click="simpleModal = true"
                >
                  Заказать обратный звонок
                </v-btn>
              </div>
            </v-scroll-x-transition>
          </v-col>
          <v-col cols="6" md="6" lg="7" class="right-part">
            <div class="food-assist__content-right">
              <v-scroll-x-reverse-transition hide-on-leave>
                <Courier
                  :height="windowWidth > 1920 ? 1115 * 0.8 : windowHeight * 0.8"
                  class="food-assist__courier"
                />
              </v-scroll-x-reverse-transition>
            </div>
          </v-col>
        </v-row>
        <!--step 2-->
        <v-row
          class="align-center flex-wrap food-assist__section"
          id="advantage"
        >
          <v-col cols="12" :sm="6" md="6" lg="5" class="left-part">
            <v-slide-x-transition hide-on-leave>
              <div class="food-assist__content-option">
                Будьте у клиента в кармане
              </div>
            </v-slide-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-title">
                Лучше остальных
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-text">
                Успех ресторана зависит от множества вещей. Мы предлагаем решить
                вопрос с одной из них - с доступностью. Будьте ближе к своему
                клиенту. Будьте буквально у него в кармане!
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-btn">
                <v-btn
                  rounded
                  dark
                  color="#FFA726"
                  :height="windowWidth > 1499 ? 58 : 35"
                  @click="questionModal = true"
                >
                  Задать вопрос менеджеру
                </v-btn>
              </div>
            </v-scroll-x-transition>
          </v-col>
          <v-col cols="6" :sm="6" md="6" lg="7" class="right-part slider">
            <div class="food-assist__content-right">
              <v-scroll-x-reverse-transition hide-on-leave>
                <v-row class="justify-end">
                  <v-col cols="6" sm="6" md="6" lg="3">
                    <AdvantageCard>
                      <template v-slot:image>
                        <HotDog
                          :width="windowWidth < 1281 ? 100 : 117"
                          :height="windowWidth < 1281 ? 100 : 117"
                        />
                      </template>
                      <template v-slot:title>
                        <span>
                          Всегда актуальное меню
                        </span>
                      </template>
                    </AdvantageCard>
                  </v-col>
                  <v-col cols="6" sm="6" md="6" lg="3">
                    <AdvantageCard>
                      <template v-slot:image>
                        <Chicken
                          :width="windowWidth < 1281 ? 100 : 117"
                          :height="windowWidth < 1281 ? 77 : 87"
                        />
                      </template>
                      <template v-slot:title>
                        <span>
                          Обновление в 2 Клика
                        </span>
                      </template>
                    </AdvantageCard>
                  </v-col>
                  <v-col cols="6" sm="6" md="6" lg="3">
                    <AdvantageCard>
                      <template v-slot:image>
                        <Pizza
                          :width="windowWidth < 1281 ? 130 : 156"
                          :height="windowWidth < 1281 ? '' : 132"
                        />
                      </template>
                      <template v-slot:title>
                        <span class="small">
                          Высокое удержание Клиентов. Скидки И Акции
                        </span>
                      </template>
                    </AdvantageCard>
                  </v-col>
                  <v-col cols="6" sm="6" md="6" lg="3">
                    <AdvantageCard>
                      <template v-slot:image>
                        0%
                      </template>
                      <template v-slot:title>
                        <span>Нет комиссии за Каждый заказ</span>
                      </template>
                    </AdvantageCard>
                  </v-col>
                </v-row>
              </v-scroll-x-reverse-transition>
            </div>
          </v-col>
        </v-row>
        <!--step 3-->
        <v-row class="align-center flex-wrap food-assist__section" id="price">
          <v-col cols="12" :sm="6" md="6" lg="5" class="left-part">
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-option">
                Базовый функционал + остальное
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-title">
                Сколько это стоит?
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-text">
                В базовый функционал входит:
                <ul class="dashed">
                  <li>
                    Создание и редактирование групп меню
                  </li>
                  <li>
                    Создание и редактирование блюда
                  </li>
                  <li>
                    Гибкая работа с добавками к блюду
                  </li>
                  <li>
                    Создание курьеров и других сотрудников
                  </li>
                  <li>
                    Просмотр финансовых данных
                  </li>
                  <li>
                    Отслеживание статуса заказа от кухни до клиента
                  </li>
                  <li>
                    Мобильное приложение для пользователя в
                  </li>
                </ul>
                Apple Store и Google Play с фирменными цветами вашего
                Ресторана/кафе и логотипом.
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-btn">
                <v-btn
                  rounded
                  dark
                  color="#FFA726"
                  :height="windowWidth > 1499 ? 58 : 35"
                  @click="simpleModal = true"
                >
                  Заказать разработку
                </v-btn>
              </div>
            </v-scroll-x-transition>
          </v-col>
          <v-col cols="6" :sm="6" md="6" lg="7" class="right-part">
            <div class="food-assist__content-right">
              <v-scroll-x-reverse-transition hide-on-leave>
                <div class="step3-right">
                  <span class="first">от</span>
                  <span class="second">7 625</span>
                  <span class="third">руб./мес.</span>
                </div>
              </v-scroll-x-reverse-transition>
            </div>
          </v-col>
        </v-row>
        <!--        step 4-->
        <v-row
          class="align-center flex-wrap food-assist__section"
          id="contacts"
        >
          <v-col cols="12" :sm="6" md="6" lg="5" class="left-part form">
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-option">
                Если у Вас остались вопросы
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-transition hide-on-leave>
              <div class="food-assist__content-title">
                Напишите нам
              </div>
            </v-scroll-x-transition>
            <v-scroll-x-reverse-transition hide-on-leave>
              <div class="step3-right">
                <v-form
                  ref="feedback"
                  class="food-assist__form"
                  v-model="feedbackValid"
                >
                  <v-text-field
                    v-model="feedbackForm.name"
                    outlined
                    light
                    rounded
                    height="50"
                    label="Имя"
                    :rules="[rules.required]"
                    color="#FFA726"
                    background-color="#fff"
                  ></v-text-field>
                  <v-text-field
                    v-model="feedbackForm.email"
                    light
                    rounded
                    outlined
                    height="50"
                    label="E-mail"
                    :rules="[rules.email]"
                    color="#FFA726"
                    background-color="#fff"
                  ></v-text-field>
                  <v-text-field
                    v-model="feedbackForm.phone"
                    light
                    rounded
                    outlined
                    height="50"
                    v-mask="'+7 (###) ###-##-##'"
                    label="Телефон"
                    :rules="[rules.required]"
                    color="#FFA726"
                    background-color="#fff"
                  ></v-text-field>
                  <v-textarea
                    v-model="feedbackForm.comment"
                    outlined
                    rounded
                    hide-details
                    no-resize
                    color="#FFA726"
                    background-color="#fff"
                  ></v-textarea>
                  <v-btn
                    rounded
                    class="food-assist__form-btn"
                    color="#FFA726"
                    dark
                    :height="windowWidth > 1499 ? 58 : 35"
                    :loading="loading"
                    @click="feedback('feedback')"
                  >
                    Отправить
                  </v-btn>
                </v-form>
              </div>
            </v-scroll-x-reverse-transition>
          </v-col>
          <v-col cols="6" :sm="6" md="6" lg="7" class="right-part form">
            <div class="food-assist__content-right">
              <v-scroll-x-transition hide-on-leave>
                <div v-if="windowWidth > 760" class="food-assist__contacts">
                  <div class="food-assist__contact">
                    <div class="food-assist__contact-title phone">
                      Телефон
                    </div>
                    <div class="food-assist__contact-text">
                      <div>
                        <a href="tel:+7 (383) 277 27 39">
                          +7 (383) 277 27 39
                        </a>
                      </div>
                      <div>
                        <a href="tel:+7 (903) 903 39 29">
                          +7 (903) 903 39 29
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="food-assist__contact">
                    <div class="food-assist__contact-title email">
                      E-mail
                    </div>
                    <div class="food-assist__contact-text">
                      <div>
                        <a href="mailto:info@eradevelopment.org">
                          info@eradevelopment.org
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="food-assist__contact">
                    <div class="food-assist__contact-title address">
                      Адрес
                    </div>
                    <div class="food-assist__contact-text">
                      <div>Россия, Новосибирск, ул. Николаева, 12</div>
                    </div>
                  </div>
                </div>
                <div v-else class="food-assist__contacts">
                  <v-card class="mx-auto" max-width="500">
                    <v-card-text>
                      <div class="food-assist__contact">
                        <div class="food-assist__contact-title phone">
                          Телефон
                        </div>
                        <div class="food-assist__contact-text">
                          <div>
                            <a href="tel:+7 (383) 277 27 39">
                              +7 (383) 277 27 39
                            </a>
                          </div>
                          <div>
                            <a href="tel:+7 (903) 903 39 29">
                              +7 (903) 903 39 29
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="food-assist__contact">
                        <div class="food-assist__contact-title email">
                          E-mail
                        </div>
                        <div class="food-assist__contact-text">
                          <div>
                            <a href="mailto:info@eradevelopment.org">
                              info@eradevelopment.org
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="food-assist__contact">
                        <div class="food-assist__contact-title address">
                          Адрес
                        </div>
                        <div class="food-assist__contact-text">
                          <div>Россия, Новосибирск, ул. Николаева, 12</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </v-scroll-x-transition>
            </div>
          </v-col>
        </v-row>
      </perfect-scrollbar>
    </div>
    <v-card
      height="40"
      class="food-assist__footer-card"
      tile
      dark
      color="#3B3B3B"
    >
      <v-footer absolute class="food-assist__footer" color="#3B3B3B">
        <v-col class="food-assist__footer-inner" cols="12">
          <span
            >© Copyright 2020
            <span v-if="windowWidth > 480">Все права защищены</span></span
          >
          <span class="food-assist__footer-name">ERA DEVELOPMENT</span>
        </v-col>
      </v-footer>
    </v-card>
    <!--    <Wave class="food-assist__wave" :width="windowWidth * 0.35" />-->
    <v-img
      class="food-assist__wave"
      src="../assets/vawe2.png"
      :width="windowWidth < 1921 ? windowWidth * 0.35 : 1920 * 0.35"
    ></v-img>
    <Cloud
      class="food-assist__cloud2"
      fill="#FFF3E0"
      :width="windowWidth < 1921 ? windowWidth * 0.1 : 1920 * 0.1"
    />
    <Cloud
      class="food-assist__cloud3"
      fill="#FFE0B2"
      :width="windowWidth < 1921 ? windowWidth * 0.14 : 1920 * 0.14"
    />
    <Cloud
      class="food-assist__cloud1"
      fill="#FFE0B2"
      :width="windowWidth < 1921 ? windowWidth * 0.17 : 1920 * 0.17"
    />
    <Background
      v-show="step !== 4"
      class="food-assist__back"
      id="back"
      :width="windowWidth < 1921 ? windowWidth * 0.65 : 1920 * 0.65"
    />
    <Balloon
      class="food-assist__balloon"
      id="balloon"
      :width="windowWidth < 1921 ? windowWidth * 0.04 : 1920 * 0.04"
    />
    <Drone
      class="food-assist__drone"
      :class="{ centered: step === 4 }"
      id="drone"
      :width="windowWidth < 1921 ? windowWidth * 0.09 : 1920 * 0.09"
    />
    <sl
      v-if="windowWidth <= 1024"
      :left="windowWidth > 1024"
      :right="windowWidth <= 1024"
      :closeOnNavigation="true"
    >
      <ul class="food-assist__header-menu burger">
        <li
          v-scroll-to="{
            el: '#main',
            container: 'body'
          }"
        >
          <a @click="step = 1" :class="{ active: step === 1 }">Главная</a>
        </li>
        <li
          v-scroll-to="{
            el: '#advantage',
            container: 'body'
          }"
        >
          <a @click="step = 2" :class="{ active: step === 2 }">Преимущества </a>
        </li>
        <li
          v-scroll-to="{
            el: '#price',
            container: 'body'
          }"
        >
          <a @click="step = 3" :class="{ active: step === 3 }">Цены</a>
        </li>
        <li
          v-scroll-to="{
            el: '#contacts',
            container: 'body'
          }"
        >
          <a @click="step = 4" :class="{ active: step === 4 }">Контакты</a>
        </li>
      </ul>
      <v-btn
        class="food-assist__burger-btn"
        color="#fff"
        outlined
        :height="35"
        @click="simpleModal = true"
        >Позвоните мне
      </v-btn>
    </sl>
    <v-bottom-sheet v-model="sheet" hide-overlay>
      <v-sheet class="text-center" height="80px" color="success">
        <v-alert
          prominent
          type="success"
          class="my-0 mx-auto d-flex align-center justify-center my-alert"
        >
          <v-row align="center">
            <v-col class="grow">
              Спасибо за обращение, мы свяжемся с Вами в ближайшее время.
            </v-col>
          </v-row>
        </v-alert>
      </v-sheet>
    </v-bottom-sheet>
    <v-dialog v-model="questionModal" width="500" content-class="custom-dialog">
      <v-card rounded width="500">
        <v-card-title>
          <div class="headline">
            Задать вопрос
          </div>
        </v-card-title>
        <v-card-text>
          <v-form ref="question" v-model="questionValid">
            <v-text-field
              v-model="questionForm.name"
              outlined
              light
              height="50"
              label="Ваше имя"
              :rules="[rules.required]"
              color="#FFA726"
              background-color="#fff"
            ></v-text-field>
            <v-textarea
              v-model="questionForm.question"
              outlined
              label="Ваш вопрос"
              no-resize
              color="#FFA726"
              :rules="[rules.required]"
              background-color="#fff"
            ></v-textarea>
            <v-textarea
              v-model="questionForm.comment"
              outlined
              hide-details
              no-resize
              label="Как с Вами связаться?"
              color="#FFA726"
              background-color="#fff"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            rounded
            color="#FFA726"
            class="mx-auto"
            width="200px"
            style="margin: 0 auto"
            dark
            :loading="loading"
            @click="feedback('question')"
          >
            Отправить
          </v-btn>
        </v-card-actions>
        <v-btn
          icon
          absolute
          top
          right
          class="close"
          @click="questionModal = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="simpleModal" width="500" content-class="custom-dialog">
      <v-card rounded width="500">
        <v-card-title>
          <div class="headline">
            Обратный звонок
          </div>
        </v-card-title>
        <v-card-text>
          <v-form ref="simple" v-model="simpleValid">
            <v-text-field
              v-model="simpleForm.name"
              outlined
              light
              height="50"
              label="Ваше имя"
              :rules="[rules.required]"
              color="#FFA726"
              background-color="#fff"
            ></v-text-field>
            <v-text-field
              v-model="simpleForm.phone"
              light
              outlined
              height="50"
              v-mask="'+7 (###) ###-##-##'"
              label="Телефон"
              :rules="[rules.required]"
              color="#FFA726"
              background-color="#fff"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            rounded
            color="#FFA726"
            class="mx-auto"
            width="200px"
            style="margin: 0 auto"
            dark
            :loading="loading"
            @click="feedback('simple')"
          >
            Отправить
          </v-btn>
        </v-card-actions>
        <v-btn
          icon
          absolute
          top
          right
          class="close"
          @click="simpleModal = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card>
    </v-dialog>
    <v-dialog v-model="videoDialog" width="750px" content-class="video-dialog">
      <div class="video-dialog__header-wrap">
        <v-row class="align-center video-dialog__header">
          <v-col cols="12" sm="6" class="video-dialog__header-left">
            Спасибо, Ваш вопрос успешно доставлен нашему менеджеру
          </v-col>
          <v-col cols="12" sm="6" class="video-dialog__header-right">
            Через 10-15 минут с Вами свяжется один из наших специалистов и
            подробно ответит на интересующий Вас вопрос.
          </v-col>
        </v-row>
      </div>
      <div class="video-dialog__body">
        <div class="video-dialog__body-title">
          А вы готовы узнать как увеличить количество продаж и средний чек?
        </div>
        <div class="video-dialog__body-sub-title">
          Если да, предлагаем Вам мини-курс «Мобильные клиенты на всю жизнь»
        </div>
        <v-row style="max-width: 550px">
          <v-col
            cols="12"
            sm="4"
            md="6"
            class="d-flex justify-center align-center"
          >
            <v-img
              src="../assets/bicycle.svg"
              style="max-width: 100%;"
              max-width="242"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="8" md="6">
            <div class="video-dialog__body-about-title">
              БЛАГОДАРЯ ЭТОМУ КУРСУ ВЫ:
            </div>
            <div class="video-dialog__body-about-options">
              Узнаете: <br /><br />
              - Как такие компании как Старбакс, ПапаДжонс и другие внедрили в
              свой Бизнес мобильные приложения Увеличили продажи на 200%<br /><br />
              - Как увеличить продажи с помощью Собственного мобильного
              приложения.<br /><br />
              - Как с помощью мобильного приложения Увеличить средний чек.<br /><br />
              - Как подобрать команду для разработки Своего мобильного
              приложения.<br /><br />
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="video-dialog__footer">
        <v-row class="align-center justify-center" style="margin: 0">
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="text-center d-flex align-center flex-column"
          >
            <div class="video-dialog__footer-img">
              <v-img
                src="../assets/elon_musk_royal_society.jpg"
                width="70"
                height="70"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
            <div class="video-dialog__footer-name">
              Роман Давыдов
            </div>
            <div class="video-dialog__footer-company">
              Директор компании <br />
              ООО «ЕРА»
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="text-center d-flex align-center flex-column"
          >
            <div class="video-dialog__footer-sale">
              ОБЫЧНАЯ ЦЕНА 1890 ₽
            </div>
            <div class="video-dialog__footer-price">
              ВАША ЦЕНА 190 ₽
            </div>
            <div class="video-dialog__footer-price-title">
              Предложение доступно еще:
            </div>
            <div class="video-dialog__footer-timer">{{ seconds }} СЕКУНД</div>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="text-center d-flex align-center justify-center flex-column"
          >
            <div class="video-dialog__footer-btn">
              ОСВОИТЬ ТЕХНИКУ ПРОДАЖ ЧЕРЕЗ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
            </div>
          </v-col>
        </v-row>
      </div>
      <v-btn icon absolute top right class="close" @click="videoDialog = false">
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </v-dialog>
  </div>
</template>

<script>
// import Wave from "../components/svg/Wave";
import Cloud from "../components/svg/Cloud";
import Balloon from "../components/svg/Balloon";
import Drone from "../components/svg/Drone";
import Background from "../components/svg/Background";
import Courier from "../components/svg/Courier";
import AdvantageCard from "../components/AdvantageCard";
import HotDog from "../components/svg/HotDog";
import Chicken from "../components/svg/Chicken";
import Pizza from "../components/svg/Pizza";
import { required, isEmail } from "../shared/validator";
import { Slide as sl } from "vue-burger-menu";
import { mapState } from "vuex";
export default {
  name: "Landing",
  components: {
    // Wave,
    Cloud,
    Balloon,
    Drone,
    Background,
    Courier,
    AdvantageCard,
    HotDog,
    Chicken,
    Pizza,
    sl
  },
  data() {
    return {
      step: 1,
      videoDialog: false,
      feedbackValid: true,
      questionValid: true,
      simpleValid: true,
      simpleForm: {},
      questionForm: {},
      feedbackForm: {},
      loading: false,
      sheet: false,
      questionModal: false,
      simpleModal: false,
      seconds: 300,
      rules: {
        required: value => required(value) || "Обязательно для заполнения",
        email: v => isEmail(v) || "Некорректный адрес электронной почты"
      }
    };
  },
  methods: {
    getScrollOption(el) {
      if (this.windowWidth > 1023) {
        return {
          el: el,
          container: "#container"
        };
      } else {
        return el;
      }
    },
    balloonPosition() {
      let balloon = document.getElementById("balloon"),
        newLeft = Math.random() * 100,
        newTop = Math.random() * 100;

      balloon.style.left = `${newLeft}%`;
      balloon.style.top = `${newTop}%`;

      setTimeout(() => {
        this.balloonPosition();
      }, 20000);
    },
    feedback(type) {
      this.loading = true;
      if (type === "simple") {
        if (!this.$refs.simple.validate()) {
          this.loading = false;
          return;
        }
      } else if (type === "question") {
        if (!this.$refs.question.validate()) {
          this.loading = false;
          return;
        }
      } else {
        if (!this.$refs.feedback.validate()) {
          this.loading = false;
          return;
        }
      }

      let formData = new FormData();
      if (type === "simple") {
        formData.append("name", this.simpleForm.name);
        formData.append("phone", this.simpleForm.phone);
        formData.append("type", "Заказать/обратный звонок");
      } else if (type === "question") {
        formData.append("name", this.questionForm.name);
        if (this.questionForm.question)
          formData.append("question", this.questionForm.question);
        if (this.questionForm.comment)
          formData.append("comment", this.questionForm.comment);
        formData.append("phone", this.questionForm.comment);
        formData.append("type", "Вопрос менеджеру");
      } else {
        formData.append("name", this.feedbackForm.name);
        formData.append("email", this.feedbackForm.email);
        formData.append("phone", this.feedbackForm.phone);
        formData.append("type", "Напишите нам");
      }

      this.$store
        .dispatch("feedback", formData)
        .then(() => {
          if (this.windowWidth > 960) {
            this.sheet = true;
            setTimeout(() => {
              this.sheet = false;
              this.simpleForm = {};
              this.questionForm = {};
              this.feedbackForm = {};
              this.questionModal = false;
              this.simpleModal = false;
              if (this.$refs.feedback) this.$refs.feedback.resetValidation();
              if (this.$refs.simple) this.$refs.simple.resetValidation();
              if (this.$refs.question) this.$refs.question.resetValidation();
            }, 2000);
          } else {
            this.snackBar.value = true;
            this.snackBar.text =
              "Спасибо за обращение, мы свяжемся с Вами в ближайшее время.";
            this.snackBar.color = "success";
            this.simpleForm = {};
            this.questionForm = {};
            this.feedbackForm = {};
            this.questionModal = false;
            this.simpleModal = false;
            if (this.$refs.feedback) this.$refs.feedback.resetValidation();
            if (this.$refs.simple) this.$refs.simple.resetValidation();
            if (this.$refs.question) this.$refs.question.resetValidation();
          }
        })
        .catch(() => {
          this.snackBar.value = true;
          this.snackBar.text = "Что-то пошло не так. Повторите попытку позже";
          this.snackBar.color = "error";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  computed: {
    ...mapState({
      snackBar: state => state.snackBar
    }),
    settings() {
      return {
        dots: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 1
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.balloonPosition(70, 30);
    });
  },
  watch: {
    step(value) {
      let pageName = "";
      if (value === 1) {
        pageName = "Главная";
      } else if (value === 2) {
        pageName = "Преимущества";
      } else if (value === 3) {
        pageName = "Цены";
      } else if (value === 4) {
        pageName = "Контакты";
      }
      /* eslint-disable-next-line */
      ym(57324937, "hit", "/", {
        title: pageName,
        referer: document.referrer
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/styles.css";
</style>
