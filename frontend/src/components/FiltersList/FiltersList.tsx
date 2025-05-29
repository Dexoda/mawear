import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { IFilters } from '@typings/state/index';
import '@styles/FiltersList.css';

export interface Props {
  filters: IFilters;
  setFilter: (name: string, value: string) => void;
}

const FiltersList = ({ filters, setFilter }: Props) => {
  const { checked } = filters;

  const handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.name, e.currentTarget.value);
  };

  return (
    <div className="filtersList">
      <List>
        <Subheader>Бойынша сүзу:</Subheader>
        <ListItem
          className="listItem"
          primaryText="Бағасы"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="< 112,500₸" name="priceRange" value="<250" checked={checked.includes('<250')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="112,500₸ - 225,000₸" name="priceRange" value="250-500" checked={checked.includes('250-500')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="225,000₸ - 337,500₸" name="priceRange" value="500-750" checked={checked.includes('500-750')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="337,500₸ >" name="priceRange" value="750>" checked={checked.includes('750>')} onCheck={handleCheck} />
          ]}
        />
        <ListItem
          className="listItem"
          primaryText="Бренд"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="Nike" name="brand" value="samsung" checked={checked.includes('samsung')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Adidas" name="brand" value="apple" checked={checked.includes('apple')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Huawei" name="brand" value="huawei" checked={checked.includes('huawei')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Gucci" name="brand" value="lg" checked={checked.includes('lg')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="H&M" name="brand" value="htc" checked={checked.includes('htc')} onCheck={handleCheck} />,
          ]}
        />
        <ListItem
          className="listItem"
          primaryText="Түсі"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="Қара" name="color" value="black" checked={checked.includes('black')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Ақ" name="color" value="white" checked={checked.includes('white')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Сұр" name="color" value="grey" checked={checked.includes('grey')} onCheck={handleCheck} />
          ]}
        />
        <ListItem
          className="listItem"
          primaryText="Киім түрі"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="Жоғары" name="os" value="android" checked={checked.includes('android')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="Төменгі" name="os" value="ios" checked={checked.includes('ios')} onCheck={handleCheck} />
          ]}
        />
        <ListItem
          className="listItem"
          primaryText="Жасы"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="5 жастан 10 жасқа дейін" name="internalMemory" value="16" checked={checked.includes('16')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="10 жастан 15 жасқа дейін" name="internalMemory" value="64" checked={checked.includes('64')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="15 жастан 30 жасқа дейін" name="internalMemory" value="128" checked={checked.includes('128')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="30 + жыл" name="internalMemory" value="256" checked={checked.includes('256')} onCheck={handleCheck} />
          ]}
        />
        {/* <ListItem
          className="listItem"
          primaryText="ОЗУ"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="1GB" name="ram" value="1" checked={checked.includes('1')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="3GB" name="ram" value="3" checked={checked.includes('3')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="4GB" name="ram" value="4" checked={checked.includes('4')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="6GB" name="ram" value="6" checked={checked.includes('6')} onCheck={handleCheck} />
          ]}
        /> */}
        <ListItem
          className="listItem"
          primaryText="Киім Мөлшері"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="XS" name="displaySize" value="4.5" checked={checked.includes('4.5')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="S" name="displaySize" value="5.1" checked={checked.includes('5.1')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="M" name="displaySize" value="5.5" checked={checked.includes('5.5')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="L" name="displaySize" value="5.8" checked={checked.includes('5.8')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="XL" name="displaySize" value="6.0" checked={checked.includes('6.0')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="XXL" name="displaySize" value="6.3" checked={checked.includes('6.3')} onCheck={handleCheck} />
          ]}
        />
        {/* <ListItem
          className="listItem"
          primaryText="Разрешение экрана"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="540x960" name="displayResolution" value="540x960" checked={checked.includes('540x960')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="1080x1920" name="displayResolution" value="1080x1920" checked={checked.includes('1080x1920')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="1125x2436" name="displayResolution" value="1125x2436" checked={checked.includes('1125x2436')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="1440x2560" name="displayResolution" value="1440x2560" checked={checked.includes('1440x2560')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="1440x2880" name="displayResolution" value="1440x2880" checked={checked.includes('1440x2880')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="1440x2960" name="displayResolution" value="1440x2960" checked={checked.includes('1440x2960')} onCheck={handleCheck} />
          ]}
        /> */}
        {/* <ListItem
          className="listItem"
          primaryText="Камера"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="8Mpix" name="camera" value="8" checked={checked.includes('8')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="12Mpix" name="camera" value="12" checked={checked.includes('12')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="13Mpix" name="camera" value="13" checked={checked.includes('13')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="16Mpix" name="camera" value="16" checked={checked.includes('16')} onCheck={handleCheck} />
          ]}
        /> */}
        {/* <ListItem
          className="listItem"
          primaryText="Процессор"
          initiallyOpen={false}
          primaryTogglesNestedList={true}
          nestedItems={[
            <Checkbox className="checkbox" label="4 ядра" name="cpu" value="quad_core" checked={checked.includes('quad_core')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="6 ядер" name="cpu" value="hexa_core" checked={checked.includes('hexa_core')} onCheck={handleCheck} />,
            <Checkbox className="checkbox" label="8 ядерный" name="cpu" value="octa_core" checked={checked.includes('octa_core')} onCheck={handleCheck} />
          ]}
        /> */}
      </List>
    </div>
  );
};

export default FiltersList;
