# SummaryList
Renders a generic list of items for the summary

## Usage

```
import SummaryList from 'src/compoenents/atoms/SummaryList/summaryList.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| children | Content of the list | node* |  |
| wrapperClassName | className of the wrapper | string | undefined |
| listClassName | className of the actual list | string | undefined |
| title | Optional title for the list | string | undefined |

```
<SummaryListComponent 
    wrapperClassName={'foo-wrapper-class'}
    listClassName={'foo-list-class'}
    title={'foo Title'}
>
    <li>FOO ITEM</li>
    <li>FOO ITEM</li>
</SummaryListComponent>
```