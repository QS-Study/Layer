# @qs-study/element-plus 연습 프로젝트

- 현재 npm에 올린 v1.0.11 버전으로 설치 시 `element-plus`를 추가로 설치하지 않고도 실행 가능
- element-plus 내 dayjs 관련 이슈로 인해 `dayjs 설치 필요`
- 레이어 패키지이므로 `nuxt.config.ts에 extends 추가` 필요

```bash
pnpm i @qs-study/element-plus-layer@1.0.11
pnpm i dayjs
pnpm run dev
```

```typescript
export default defineNuxtConfig({
  extends: ['@qs-study/element-plus-layer'],
});
```
