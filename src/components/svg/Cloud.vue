<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 331.374 80.657"
  >
    <path
      id="Path_162"
      data-name="Path 162"
      d="M633.745,143.642s-10.574-30.395-40.969-31.716-25.109,27.752-46.254,35.68-29.073-14.538-47.573-9.25-6.61,19.821-22.466,25.109-14.538-9.252-38.326,2.643-29.073,15.857-34.359,17.178-52.861,9.252-52.861,9.252H680s9.25-29.073-9.253-40.969S653.569,154.213,633.745,143.642Z"
      transform="translate(-350.938 -111.882)"
      :fill="active ? activeColor : fill || '#FFE0B2'"
    />
  </svg>
</template>

<script>
import icon_config from "@/mixins/icon_config";
export default {
  name: "Cloud",
  mixins: [icon_config]
};
</script>

<style scoped></style>
