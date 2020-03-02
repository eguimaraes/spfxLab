$nome=$args[0]
md $nome
cd $nome
npm init
tsc --init
npm install httpserver --save
npm install typescript  --save
npm install jquery@2 --save
npm install jqueryui --save
npm install @types/jquery@2 --save
npm install @types/jqueryui  --save
npm install @types/microsoft-ajax  --save @types/sharepoint --save-dev
npm install @types/angular --save
npm install @microsoft/sp-core-library --save
npm install moment --save 
npm install angular --save
npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save
npm install @pnp/sp @pnp/graph --save
npm shrinkwrap
