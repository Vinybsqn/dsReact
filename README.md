# dsReact

QUESTIONS DE COURS /5 POINTS

1. Quel composant vu en cours permet la gestion des routes avec React ?
R: BrowserRouter

2. Quel hook permet de récupérer un paramètre passé dans l’url ?
R: useParams

3. Qu’est-ce qu’un fragment ?
R: Un fragment permet de grouper une liste d'éléments enfants sans ajouter de nœuds supplémentaires au DOM, pour eviter les divs inutiles

4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant ?
R: useEffect

5. React manipule-t-il directement le DOM de l’application ? expliquez…
R: Non react manipule le DOM virtuel uniquement et met à jour le DOM réel uniquement si nécessaire

QUESTIONS PRATIQUES /5 POINTS
Pour les questions suivantes, la réponse devra être une et une seule ligne de code :

1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en
   lui transmettant le slug du post à afficher en paramètre.
R: <Route path="/post/:slug" component={Post} />

2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque
   l’on clique dessus, lance l’action « SET_ITEM ».
R: <button onClick={() => dispatch({ type: 'SET_ITEM' })}>Lancer l'action</button>

3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur
   « false » par dafaut.
R: const [isAdmin, setIsAdmin] = useState(false);

4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à
   rouge.
R: <div style={{ color: 'red' }}>{message}</div>

5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.
R: <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />