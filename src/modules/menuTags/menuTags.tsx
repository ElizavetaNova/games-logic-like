import classNames from 'classnames';
import { allTags } from '../../consts/allTags';
import './menuTags.scss';

const menu = [
    allTags,
    'Логика и мышление',
    'Загадки',
    'Головоломки',
    'Шахматы',
    'Окружающий мир',
    'Страны и столицы',
];

export const MenuTags = (props: { setTagFilter: React.Dispatch<React.SetStateAction<string>>, tagFilter: string }) => {
    const { setTagFilter, tagFilter } = props
    return <div
        className={'menu'}
    >
        {
            menu.map((item, index) =>
                <div
                    key={index}
                    className={classNames(
                        'menu-item',
                        tagFilter === item && 'menu-item--checked',
                    )}
                    onClick={() => setTagFilter(item)}
                >
                    <p>{item}</p>
                </div>
            )
        }
    </div>
}
