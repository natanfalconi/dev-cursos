import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';
import {
  Container,
  CollapseItem,
  CollapseHeader,
  CollapseTrigger,
  CollapseContent,
  CollapseContainer,
} from './styles';

interface IFeaturesCollapse {
  features: Array<{
    title: string;
    description: string | ReactNode;
    icon: any;
  }>;
}

const FeaturesCollapse: React.FC<IFeaturesCollapse> = ({ features }) => {
  const [selected, setSelected] = useState('0');
  return (
    <Container>
      <CollapseContainer
        type="single"
        onValueChange={e => setSelected(e)}
        defaultValue="0"
        collapsible
      >
        {features.map((f, index) => (
          <CollapseItem value={index.toString()} key={index}>
            <CollapseHeader>
              <span>
                <FontAwesomeIcon icon={f.icon as IconProp} />
                {f.title}
              </span>
              <CollapseTrigger>
                {selected === index.toString() ? (
                  <FontAwesomeIcon icon={faAngleUp as IconProp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown as IconProp} />
                )}
              </CollapseTrigger>
            </CollapseHeader>
            <CollapseContent>
              <div>{f.description}</div>
            </CollapseContent>
          </CollapseItem>
        ))}
      </CollapseContainer>
    </Container>
  );
};

export default FeaturesCollapse;
