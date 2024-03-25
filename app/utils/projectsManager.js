/*
    Utils module to read projects configuration file
    NOTE: folder names inside the root "images" has to be the same as project root in imageConfig.json
*/

import ProjConfig from '../../public/ProjectsConfig.json' with { type: "json" };
import nextConfig from '../../next.config.mjs'


export function getProjectsList (){
    let array = [];
    for (var projectName in ProjConfig) {
        array.push(projectName);
    };

    return array;
};

export function getProjectThumbnail(projectId){
    return (
        `${nextConfig.basePath}/images/${projectId}/${ProjConfig[projectId].images[0]}`
    );
};

export function getProjectTitle(projectId){
    return ProjConfig[projectId].title;
};

export function getProjectCaption(projectId){
    return ProjConfig[projectId].caption;
};

export function getProjectImages(projectId){
    let array = [];
    let imgSet = ProjConfig[projectId].images;
    
    imgSet.map((image)=>{
        array.push(`${nextConfig.basePath}/images/${projectId}/${image}`)
    });
    return array;
};
