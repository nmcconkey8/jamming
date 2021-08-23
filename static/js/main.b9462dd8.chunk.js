(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(1),c=a.n(s),i=a(9),r=a.n(i),o=(a(14),a(8)),l=a(3),h=a(4),u=a(2),d=a(6),p=a(5),m=(a(15),a(16),a(0)),j=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchBar",children:[Object(m.jsx)("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.props.handleTermChange}),Object(m.jsx)("button",{className:"SearchButton",onClick:this.props.onSearch,children:"SEARCH"})]})}}]),a}(c.a.Component),b=(a(18),a(19),a(20),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"renderAction",value:function(){var t=this;return this.props.isRemoval?Object(m.jsx)("button",{className:"Track-action",onClick:function(){return t.props.onRemove(t.props.track.id)},children:"-"}):Object(m.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Track",children:[Object(m.jsxs)("div",{className:"Track-information",children:[Object(m.jsx)("h3",{children:this.props.track.name}),Object(m.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(c.a.Component)),f=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(m.jsx)(b,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(c.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"SearchResults",children:[Object(m.jsx)("h2",{children:"Results"}),Object(m.jsx)(f,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(c.a.Component),k=(a(21),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Playlist",children:[Object(m.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(m.jsx)(f,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(m.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY "})]})}}]),a}(c.a.Component)),y="https://nmcconkey8.github.io/jamming/",O={getAccessToken:function(){if(console.log(y),n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("95674429470948d489e824172ca75ea6","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat(y);window.location=s},search:function(t){var e=O.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n=O.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){var n=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:s,method:"POST",body:JSON.stringify({uris:e})})}))}))}}},T=O,g=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"My Playlist",playlistTracks:[],term:""},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlayListName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"handleTermChange",value:function(t){this.setState(Object(o.a)(Object(o.a)({},this.state),{},{term:t.target.value}))}},{key:"search",value:function(){var t=this;console.log(this.state.term),T.search(this.state.term).then((function(e){console.log(e),t.setState({searchResults:e})}))}},{key:"savePlaylist",value:function(){var t=this,e=this.state.playlistTracks.map((function(t){return t.uri}));T.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"addTrack",value:function(t){var e=this.state.playlistTracks;e.find((function(e){return e.id===t.id}))||(e.push(t),this.setState({playlistTracks:e}))}},{key:"removeTrack",value:function(t){console.log(t);var e=this.state.playlistTracks;e=e.filter((function(e){return e.id!==t})),this.setState({playlistTracks:e})}},{key:"updatePlayListName",value:function(t){this.setState({playlistName:t})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Ja",Object(m.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{onSearch:this.search,handleTermChange:this.handleTermChange}),Object(m.jsxs)("div",{className:"App-playlist",children:[Object(m.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(m.jsx)(k,{tracks:this.state.searchResults,playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(c.a.Component),N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),N()}],[[22,1,2]]]);
//# sourceMappingURL=main.b9462dd8.chunk.js.map