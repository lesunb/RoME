// Importe as dependências necessárias
import axios from 'axios';

// Template HTML
const template = `
<div class="instagram-feed">
  <h2>Instagram Feed</h2>
  <ul>
    <li v-for="post in instagramPosts" :key="post.id">
      <img :src="post.image" alt="Instagram Post">
      <p>{{ post.caption }}</p>
    </li>
  </ul>
</div>
`;

// Defina a função do plugin
export default (options, context) => {
    // Implemente a lógica para acessar o feed do Instagram
    async function getInstagramFeed() {
        try {
            const response = await axios.get('URL_DA_API_DO_INSTAGRAM');
            // Processar a resposta e retornar os feeds do Instagram conforme necessário
            return response.data;
        } catch (error) {
            console.error('Erro ao recuperar os feeds do Instagram:', error);
            return [];
        }
    }

    // Registre o plugin no contexto do VuePress
    context.$getInstagramFeed = getInstagramFeed;

    // Registre o template HTML como uma opção do plugin
    context.$instagramFeedTemplate = template;
};
