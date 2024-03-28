# Layer

## 실행 방법

```
git clone
cd use-layer-projects/project1
pnpm i
pnpm run dev
```

---

## 폴더 구조

```
layer-sample
ㄴ README.md
ㄴ use-layer-projects
    ㄴ project1
ㄴ layers (pnpm dlx nuxi@latest init <project-name> 을 통해 생성한 nuxt 프로젝트들)
    ㄴ element-plus-layer
    ㄴ no-element-plus-text-layer
    ㄴ no-element-plus-select-layer
```

### use-layer-projects: Nuxt3의 Layer 를 사용한 프로젝트 폴더

### layers: Nuxt3의 Layer 기능을 사용하기 위해 생성한 레이어들을 모아놓은 폴더

::: warning
현재 레이어들은 app.vue를 사용하지 않고 components 폴더를 생성해서 그 안에 넣어 사용하고 있습니다. 근데 각 컨트롤들을 모두 레이어로 만들어야 하기 때문에 **components 폴더가 아닌 app.vue 파일을 사용하는 방법을 찾아야** 할 것 같습니다.
:::

- `element-plus-layer` : element-plus를 설치하기 위한 목적으로 만든 레이어로 해당 폴더에서 `nuxt.config.ts`, `package.json` 파일만 참고하시면 됩니다.

::: warning
현재 레이어를 사용하고 있는 project1 폴더의 nuxt.config.ts에서 extends 배열 안에 있는 `'../../layers/element-plus-layer',`를 주석처리한다면 에러가 발생하고 화면이 정상적으로 보이지 않습니다.
또한 현재 레이어를 사용하는 곳에서도, 레이어 중에서도 하나는 element-plus가 설치되어야 정상적으로 element-plus를 사용할 수 있습니다. 이는 peer dependency 를 알아보고 적용한다면 해결될 가능성이 있습니다.
:::

::: tip
element-plus를 설치하기 위한 명령어

- `pnpm i @pinia/nuxt`
- `pnpm i @element-plus/nuxt`
- `pnpm add -D sass`

:::

- `no-element-plus-select-layer` : **element-plus를 설치하지 않고, element-plus에서 제공하는 Select 컴포넌트를 사용**한 레이어
  - element-plus 공식 문서: https://element-plus.org/en-US/component/select.html
- `no-element-plus-text-layer` : **element-plus를 설치하지 않고, element-plus에서 제공하는 Text 컴포넌트를 사용**한 레이어
  - element-plus 공식 문서: https://element-plus.org/en-US/component/text.html

---

## 배포 사이트: https://qs-study-layer.vercel.app/

- 현재 Vercel을 이용해 `use-layer-projects/project1` 폴더 기준으로 배포하고 있습니다.
- 추후 `project1`과 같이 레이어를 사용한 프로젝트가 더 생긴다면 폴더 구조 및 배포 기준 폴더 변경 필요합니다.
